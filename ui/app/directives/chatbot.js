app.directive('chatBot', ['$http', '$timeout', '$compile', 'URLVars', function($http, $timeout, $compile, URLVars){
	// Runs during compile
	return {
		// name: '',
		// priority: 2,
		// terminal: true,
	    scope: {}, // {} = isolate, true = child, false/undefined = no change
		 controller: function($scope, $element, $attrs, $transclude) {
		 	/* variables init */

		 	//define Vars
             $scope.msgs = [];
             $scope.is_sub_info = false;
             $scope.sub_info_type = null;
             $scope.sub_info_data = null;
             $scope.isTrack = false;
             $scope.shortcut = false;
             $scope.shortcutType = null;
		 	//set templates
		 	 $scope._chat_bot_msgs_template_ = URLVars.templateUrl.chatBotTemplateMsgs;
		 	//get scroller element
		 	 $scope.chat_scroller = angular.element($element["0"].children["0"].children.item(1));

		 	/* end of variables init */





            $scope.getRecords = function (user_msg) {

			  	console.log("called getRecords")
                 return
                 var data = { msg: user_msg}; 
                 if($scope.shortcut) {
                   data.shortcut = $scope.shortcutType;	
                   data.userId = $scope.userId;
               }
                 var res = $http.post("api/bot/module",data);
                 res.success(function(data) {

                 	//play bot sound
                 	$scope.playSound("bot")

                 	console.log(typeof (data.module.msg))
                 	if((typeof data.module.msg) == "string")
                 			data.module.msg = Parser.parseMsg(data.module.msg);


                 	//reset flags
			  	$scope.shortcut = false;
                $scope.shortcutType = null;

                 	$scope.popTypingMsg();
                 	if(data) {
                 	console.log(data.module.msg)

                 	//check msgs to display before pushing original msgs
                 	$scope.checkBeforePushMsgs(data.module);

                    $scope.msgs.push({by:"bot",msg:data.module.msg});
                     if(data.module.sub_info!=null) {
                     	$scope.checkSubInfo(data.module);
                   }
                     
                 }
                    console.log($scope.msgs)

                    //check msgs to display after pushing original msgs
                 	$scope.checkAfterPushMsgs(data.module);


                 });


                 



             }

            $scope.performSuggestion = function(type, data) {

                  if(type == 'option') {
                  	$scope.suggestion_template = URLVars.suggestionTemplateUrl.option;
                  	$scope.suggestion = true;
                  	$scope.suggestionData = data.items;
                  }

                  if(type == 'list') {
                  	$scope.suggestion_template = URLVars.suggestionTemplateUrl.list;
                  	$scope.suggestion = true;
                  	$scope.suggestionData = data.items;
                  }
                  if(type == 'user_list') {
                  	$scope.suggestion_template = URLVars.suggestionTemplateUrl.user_card;
                  	$scope.suggestion = true;
                  	$scope.suggestionData = data;
                  }


			  } 
		 	
		 	$scope.openOptionModule = function(obj) {
            	$scope.suggestion = false;
            	//$scope.user_msg.msg = obj.name;
            	$scope.msgs.push({
					   	   msg:obj.name,
					   	   by:"me"
					   });
            }

            $scope.openListModule = function(obj) {
            	$scope.suggestion = false;
            	//$scope.user_msg.msg = obj.name;
            	$scope.msgs.push({
					   	   msg:obj.name,
					   	   by:"me"
					   });

            }

           
            $scope.initBot = function() {
              	var m_ = {
              		by:"bot",
              		msg:"Welcome! I am Your Assistant, How can I Help You?",
              		type:"option",
              		sub_info:{
              			items:[
              			      {
              			      	name:"who ramesh?",
              			      },
              			      {
              			      	name:"Hello"
              			      }
              			  ]
              		}
              	}
              	$scope.playSound("bot");
              	$scope.msgs.push(m_);
              			$scope.is_sub_info = true;
                    	$scope.sub_info_type = m_.type;
                        $scope.sub_info_data = m_.sub_info;
                    	$scope.performSuggestion(m_.type,m_.sub_info);
              }







           $scope.bindQuery = function() {
              	 $scope.suggestion = false; //hide suggestion section

					   
					   //check empty
					   if($scope._chat_bot_query_.length == 0)
					   	return;

					   $scope.msgs.push({
					   	   msg:$scope._chat_bot_query_,
					   	   by:"me"
					   });
					   $scope._chat_bot_query_ = "";
              }





		 	//ui events
		 	$scope.bindQueryOnPress = function(e) {

			  	var code = (e.keyCode ? e.keyCode : e.which);
					if(code == 13) { //Enter keycode
					
                          $scope.bindQuery();
					}
  				}

  		     $scope.scrollToBottom = function() {
			  	$scope.chat_scroller[0].scrollTop = ($scope.chat_scroller[0].scrollHeight + 20);
			  }		

			 $scope.pushTypingMsg = function() {

			  	 $scope.typing = "block";
			  	
			  }

			 $scope.popTypingMsg = function() {

			  	$scope.typing = "none";

			  } 


			//other events'
			$scope.playSound = function (who) {
            	if(who == "user") {
	            	var audio = new Audio(URLVars.soundUrl.user);
					audio.play();
				} else {
					var audio = new Audio(URLVars.soundUrl.bot);
					audio.play();
				}
            }  


            $scope.initBot();

		 },
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: function() {
            

  //          $http.get('http://127.0.0.1:3000/app/directives/templates/chat-bot.html')
		// 	.then(function(res) {
		// 		console.log(res.data)
		// 		return res.data
		// 	});
			
            
            

		// },
		templateUrl: function() {
			return URLVars.templateUrl.chatBotTemplateUrl;
		},
		// replace: true
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

			  


			  $scope.$watch('msgs', function (newValue, oldValue, scope) {


			  	$timeout(function() {$scope.scrollToBottom();}, 100);
			  	if($scope.msgs.length>0) {
                       if($scope.msgs[$scope.msgs.length-1].by == 'me') {


                       	$scope.playSound("user");
					    
                          
                          if($scope.isTrack) {
                           	 $scope.matchRegex($scope.msgs[$scope.msgs.length-1].msg);
                          }  else {
                          	console.log("called")
                             $scope.getRecords($scope.msgs[$scope.msgs.length-1].msg);
                           }

                           $timeout(function() {$scope.pushTypingMsg();}, 800); 
                            
                        }	 else {
                        	$scope.popTypingMsg();
                        }
                    }

                 }, true);




                 


			
		}
	};
}]);

