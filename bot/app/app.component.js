alight.component('bot-flow-root', function (scope, element, env) {
	    return { 
	    	templateUrl: "app/app.component.html",
	    	onStart: function() {

	    			scope.initVars = function() {  //vars
	    				scope.query = "";
				    	scope.msgs = [];
				    	scope.Helper = __c_b_app.service.Helper;
				    	scope.test_bot = (document.querySelectorAll("[" + __c_b_app.env.vars.bot_id_selecter_attr + "]")["0"].attributes.getNamedItem('test-bot'));
				    	scope.bot_socket = io.connect(__c_b_app.env.Api.urls.socket_connect);
				    	scope.client_id = scope.Helper.decodeId(document.querySelectorAll("[" + __c_b_app.env.vars.bot_id_selecter_attr + "]")["0"].attributes.getNamedItem(__c_b_app.env.vars.bot_id_selecter_attr).value);
	    				scope.uuid = (scope.test_bot ? ('	_test_' + scope.Helper.getCookie(__c_b_app.env.cookie.uuid_key)) : (scope.Helper.getCookie(__c_b_app.env.cookie.uuid_key)));
	    				scope.is_typing = false;
	    				scope.suggestion = null;
	    				scope.is_scroll = true;
	    				scope.bot_scroller = document.getElementById("_c_b_app_scroller_id");
	    				scope.is_scroll = true;
             			scope.more_loading = false;
             			scope.current_page = 1;
             			scope.page_end = false;
             			scope.is_bot_open = false;
             			scope.is_bot_init = false;
             			scope.bot_name = "Help Assistance";
	    			}

	    			//script to handle ui on incoming and outgoing msgs
	    			scope.onMsgPush = function() {
		    			env.watch("msgs", function(New, old) {

		    				if(scope.msgs.length>0) {
		    					if(scope.msgs[scope.msgs.length-1].by == 'me') { //user request
		    						scope.typing.show();
		    						scope.emitQuery(scope.msgs[scope.msgs.length-1].msg)
		    						scope.playSound("user")
		    					} else { // bot response
		    						scope.typing.hide();
		    						scope.playSound("bot")
		    					}
		    				}

		    				setTimeout(function() {
		    					scope.scrollToBottom();
		    					env.scan();
		    				}, 10);
		    			}, true)
	    			}

	    			scope.emitQuery = function(msg) {  //send query to server
		              if(scope.msgFrom != "user") return;
		               console.log("query is requesting by user..." + msg)
		               var data = { c_id:scope.client_id, uuid: scope.uuid,  query: msg };
		               scope.bot_socket.emit('modules_req', data)
		            }

		            scope.listenQueryResponse = function() {
		                 scope.bot_socket.on('modules_res', function(data) {
		                  console.log(data)
		                  scope.pushMsgs(data.module.msg);
		                  scope.performSuggestion(data.module.shortcut, data.module.shortcutData)
		                  //scope.$apply();
		                  env.scan();
		                 })
		            }

		            scope.performSuggestion = function(type, data) {
		            	if(!type || !data) return;
		            	scope.suggestion = {};
		            	scope.suggestion['type'] = type;
		            	scope.suggestion['data'] = data;

		            	scope.scrollToBottom();
		            }

		            scope.onSuggestionSelect = function(item) {
		            	scope.msgFrom = "user";
                  		scope.suggestion = false;
                  		scope.pushMsgs(item, "me");
                  		env.scan();
		            }

	    			//fired on user-input
				    scope.sendQuery = function(ev) {
				    	scope.msgFrom = "user";
				    	scope.suggestion = false;
				    	scope.pushMsgs(scope.query, "me")
				    	scope.query = "";
				    }

				    scope.initBotSocket = function() {
			            var data = { c_id: scope.client_id, uuid: scope.uuid };
			            scope.bot_socket.emit('init', data);
			        }


			        scope.pushMsgs = function(msg, by, time, reverse) {
			        	//valid params
			        	if(!msg) return;
			        	by = ( by ? by : 'bot' );
			        	time = ( time ? time : new Date());
			        	time = scope.formatDate(time);

			        	if(typeof(msg) == 'object') {  //array ? then add single items by loop
	                        for(var i=0;i<msg.length;i++) {
	                          if(reverse == true) {
	                            console.log("reverse adding")
	                            scope.msgs.splice(0, 0, {by:by,msg:msg[i], timestamp:time});
	                            scope.msgs.join();
	                          }
	                          else{
	                            scope.msgs.push({by:by,msg:msg[i], timestamp:time});
	                          }
	                          //$scope.$apply();
	                      }
	                    } else {
	                        if(reverse == true) {
	                            console.log("reverse adding")
	                            scope.msgs.splice(0, 0, {by:by,msg:msg, timestamp:time});
	                            scope.msgs.join();
	                          }
	                          else{
	                            scope.msgs.push({by:by,msg:msg, timestamp:time});
	                          }
	                	}
			        }

			        scope.formatDate = function(date) {
			        	var date = new Date(date);
			        	var date_ = date.getDate();
			        	var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			        	var month_ = month_names_short[date.getMonth()];
			        	var hours_ = date.getHours();
			        	var minute_ = date.getMinutes();
			        	return (date_ + " " + month_ + " " + hours_ + ":" + minute_);
			        }


			        scope.connectBot = function() {
			        	console.log(scope.uuid)
			        	if(scope.uuid) { //already user initiated with bot and resume with last session

			        		__c_b_app.http.get(__c_b_app.env.Api.urls.get_msg + scope.uuid + "/" + __c_b_app.env.vars.pagination.limit + "/1", function(res) {
						    	scope.initBotSocket();
						    	scope.listenQueryResponse(); //real time sockets responce listen for queries
						   		
						   		var arr = (JSON.parse(res)).reverse();
				                   for(var i=0;i<arr.length;i++) {  //push old session msgs
				                      scope.pushMsgs(arr[i].msg, arr[i].by, arr[i].timestamp);
				                   }

				                setTimeout(function() {
				                	scope.scrollToBottom();
				                	scope.typing.hide();
				                }, 10);

				                scope.is_bot_init = true;

				                env.scan();	

						    })
			        		

			        	} else {  //fresh connect by the user

			        		scope.uuid = scope.Helper.generateUUID();
			        		scope.Helper.setCookie(__c_b_app.env.cookie.uuid_key, scope.uuid);
                 			scope.initBotSocket();
                 			scope.listenQueryResponse(); //real time sockets responce listen for queries
                 			scope.is_bot_init = true;
			        	}
			        	
			        }


				    scope.init = function() {
				    	scope.initVars();
				    	scope.setupBot();
				    	scope.onMsgPush();
				    	scope.connectBot();
				    	scope.fetchMsgsOnVertScroll();

				    }

				    scope.setupBot = function() {
				    	scope.bot_socket.on("setup", function(data) {
				    		console.log(data)
				            scope.Helper.setUpBotStyle(data.style);
				            scope.bot_name = data.bot_name;
				        })
				    }


				    //ui events
				    scope.typing = {
				    	show: function() {
				    		scope.is_typing = true;
				    	},
				    	hide: function() {
				    		scope.is_typing = false;
				    	}
				    }

				    scope.scrollToBottom = function() {
			          if(scope.is_scroll) {
			            scope.bot_scroller.scrollTop = (scope.bot_scroller.scrollHeight + 20);
			          } else {
			            scope.is_scroll = true;
			          } 
			        } 

			        scope.fetchMsgsOnVertScroll = function() { //real-time scroll event to fetch more msgs on scroll to top
			        	
			        	scope.bot_scroller.onscroll = function() {
        					if(scope.page_end) return;
					        if(scope.bot_scroller.scrollTop == 0) {
					          if(scope.more_loading == true) return;
					          scope.more_loading = true;
					          var height = scope.bot_scroller.scrollHeight;
					          env.scan();
					          __c_b_app.http.get(__c_b_app.env.Api.urls.get_msg + scope.uuid + "/" + __c_b_app.env.vars.pagination.limit + "/" + ( ++scope.current_page ), function(res) {
					               var arr = (JSON.parse(res));
					               if(arr.length == 0) {
					               		scope.page_end =  true;
					               		scope.more_loading = false;
					               		env.scan();
					               }
					                   for(var i=0;i<arr.length;i++) {
					                      scope.is_scroll = false;
					                      scope.pushMsgs(arr[i].msg, arr[i].by, arr[i].timestamp, true);
					                   }
					               setTimeout(function(){
					               	scope.bot_scroller.scrollTop = (scope.bot_scroller.scrollHeight-height); 
					               	scope.typing.hide();
					               	env.scan()
					               }, 0); 
					               scope.more_loading = false;
					        	   env.scan();	
					          });

					        }

					      }
			        }

			        //other events'
			       scope.playSound = function (who) {
			              if(who == "user") {
			                var audio = new Audio(__c_b_app.env.Api.urls.sounds.bot);
			                 audio.play();
			              } else {
			                var audio = new Audio(__c_b_app.env.Api.urls.sounds.user);
			                audio.play();
			              }
			       }


				    

					scope.init();
	    	}
	    };
});