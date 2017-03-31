app.directive('chatBot', ['$http', '$timeout', '$compile', 'URLVars', 'Helper', 'STRVars', function($http, $timeout, $compile, URLVars, Helper, STRVars){
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
             var bot_socket = io.connect(URLVars.sokectsUrl.bot);
             $scope.client_id = Helper.decodeId(document.querySelectorAll('chat-bot-link')["0"].attributes["0"].value);
             $scope.currentPage = 1;
             $scope.isScroll = true;
             $scope.moreLoading = false;

             console.log("client", $scope.client_id)
             



      //set templates
       $scope._chat_bot_msgs_template_ = URLVars.templateUrl.chatBotTemplateMsgs;
      //get scroller element
       $scope.chat_scroller = angular.element($element["0"].children["0"].children.item(1));

       console.log("scroller", $scope.chat_scroller)

      /* end of variables init */


      $scope.chat_scroller[0].onscroll = function() {
        
        if($scope.chat_scroller[0].scrollTop == 0) {
          if($scope.moreLoading == true) return;
          $scope.moreLoading = true;
          var height = $scope.chat_scroller["0"].scrollHeight;

          $http.get(URLVars.api.getMsg + $scope.uuid + "/" + STRVars.pagination.limit + "/" + ( ++$scope.currentPage )).then(function(res) {
               var arr = res.data;
                   for(var i=0;i<arr.length;i++) {
                      $scope.isScroll = false;
                      $scope.pushMsgs(arr[i].msg, arr[i].by, arr[i].timestamp, true);
                   }
               $timeout(function(){$scope.chat_scroller[0].scrollTop = ($scope.chat_scroller["0"].scrollHeight-height); }, 0); 
               $scope.moreLoading = false;    
          });

        }
      }


            $scope.reqModules = function(msg) {
               console.log("module is requesting by user..." + msg)
               var data = { c_id:$scope.client_id, uuid: $scope.uuid,  query: msg };
               bot_socket.emit('modules_req', data)
            }


            //this function is real-time
            $scope.resModules = function() {
                 bot_socket.on('modules_res', function(data) {
                  console.log(data)
                  $scope.pushMsgs(data.module.msg);
                  $scope.performSuggestion(data.module.shortcut, data.module.shortcutData)
                  $scope.$apply();
                 })
            }

            $scope.pushMsgs = function(msg, by, time, reverse) {
              console.log("reverse", reverse)
               if(!time) time = new Date();
               if(by == null) by = 'bot'; 
                  if(typeof(msg) == 'object') {
                        for(var i=0;i<msg.length;i++) {
                          if(reverse == true) {
                            console.log("reverse adding")
                            $scope.msgs.splice(0, 0, {by:by,msg:msg[i], timestamp:time});
                            $scope.msgs.join();
                          }
                          else{
                            $scope.msgs.push({by:by,msg:msg[i], timestamp:time});
                          }
                          //$scope.$apply();
                      }
                    } else {
                        if(reverse == true) {
                            console.log("reverse adding")
                            $scope.msgs.splice(0, 0, {by:by,msg:msg, timestamp:time});
                            $scope.msgs.join();
                          }
                          else{
                            $scope.msgs.push({by:by,msg:msg, timestamp:time});
                          }
                } 

            }


            $scope.getRecords = function (user_msg) {

                 console.log("called getRecords")
                 return
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
                 console.log("shortcut Type:" + type)

                  if(type == 'option') {
                    $scope.suggestion_template = URLVars.suggestionTemplateUrl.option;
                    $scope.suggestion = true;
                    $scope.suggestionData = data;
                  }

                  if(type == 'list') {
                    $scope.suggestion_template = URLVars.suggestionTemplateUrl.list;
                    $scope.suggestion = true;
                    $scope.suggestionData = data;
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
                  $scope.pushMsgs(obj, "me");
                }

          $scope.openListModule = function(obj) {
            $scope.suggestion = false;
            //$scope.user_msg.msg = obj.name;
            $scope.pushMsgs(obj, "me");

          }

           
          $scope.initBot = function() {
            var data = { c_id: $scope.client_id, uuid: $scope.uuid };
            bot_socket.emit('init', data);
          }

          $scope.connectBot = function() {

              //check cookie value
              $scope.uuid = Helper.getCookie(STRVars.cookies.uuid_key);
              if($scope.uuid  != undefined) { //alreday connected
                console.log("connecting with existance uuid")

                 //$scope.initBot();
                 $http.get(URLVars.api.getMsg + $scope.uuid + "/" + STRVars.pagination.limit + "/1").then(function(res) { //get msgs from server

                   $scope.initBot();
                   $scope.resModules(); //call for real-time modules listen
                   var arr = res.data.reverse();
                   for(var i=0;i<arr.length;i++) {

                      $scope.pushMsgs(arr[i].msg, arr[i].by, arr[i].timestamp);
                   }

                    $scope.scrollToBottom();  

              }, function(err) {

              });



              } else {  //first connects
                console.log("connecting with new uuid")
                 $scope.uuid = Helper.generateUUID();
                 Helper.setCookie(STRVars.cookies.uuid_key, $scope.uuid);
                 $scope.initBot();
                 $scope.resModules(); //call for real-time modules listen

              }

              
             

          }    







           $scope.bindQuery = function() {
                 //validation
                 if($scope._chat_bot_query_ == undefined) return; 
                 if($scope._chat_bot_query_.length == 0) return; //check empty

                 $scope.suggestion = false; //hide suggestion section

           $scope.pushMsgs($scope._chat_bot_query_, "me");
           $scope._chat_bot_query_ = "";
              }





      //ui events
      $scope.bindQueryOnPress = function(e) {

          var code = (e.keyCode ? e.keyCode : e.which);
          if(code == 13) { //Enter keycode
          
                          $scope.bindQuery();
          }
          }
        $scope.bindQueryOnClick = function() {
                $scope.bindQuery();
              } 

       $scope.scrollToBottom = function() {
          if($scope.isScroll) {
            $scope.chat_scroller[0].scrollTop = ($scope.chat_scroller[0].scrollHeight + 20);
          } else {
            $scope.isScroll = true;
          } 
        }   

        $scope.scrollToBottomOnOpen = function() {
          console.log("SCROLL ON OPEN")
          $scope.chatOpened = true;
          $timeout(function() { $scope.scrollToBottom(); } , 0000)
        }

       $scope.pushTypingMsg = function() {

           $scope.typing = "block";
          
        }

       $scope.popTypingMsg = function() {
                console.log("poping typing....")
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


            $scope.connectBot();
            

     },
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: function() {
            

  //          $http.get('http://127.0.0.1:3000/app/directives/templates/chat-bot.html')
    //  .then(function(res) {
    //    console.log(res.data)
    //    return res.data
    //  });
      
            
            

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
                       if($scope.msgs[$scope.msgs.length-1].by == 'me') { // user submition 

                          $scope.playSound("user");
                          $scope.reqModules($scope.msgs[$scope.msgs.length-1].msg);
                          $timeout(function() {$scope.pushTypingMsg();}, 500); 
                            
                        } else {  //bot resposnse

                          $scope.playSound("bot");
                          $scope.popTypingMsg();

                        }
                    }

                 }, true);




                 


      
    }
  };
}]);

