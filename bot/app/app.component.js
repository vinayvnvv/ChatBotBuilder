alight.component('bot-flow-root', function (scope, element, env) {
	    return { 
	    	templateUrl: "app/app.component.html",
	    	onStart: function() {

	    			scope.initVars = function() {
	    				scope.query = "";
				    	scope.msgs = [];
				    	var Helper = __c_b_app.service.Helper;
				    	scope.bot_socket = io.connect(__c_b_app.env.Api.urls.socket_connect);
				    	scope.client_id = Helper.decodeId(document.querySelectorAll("[" + __c_b_app.env.vars.bot_id_selecter_attr + "]")["0"].attributes.getNamedItem(__c_b_app.env.vars.bot_id_selecter_attr).value);
	    			}

	    			//script to handle ui on incoming and outgoing msgs
	    			scope.onMsgPush = function() {
		    			env.watch("msgs", function(New, old) {
		    					//here is the script
		    			}, true)
	    			}

	    			//fired on user-input
				    scope.sendQuery = function(ev) {
				    	scope.msgs.push(scope.query)
				    	scope.query = "";
				    }


				    scope.init = function() {
				    	scope.initVars();
				    	scope.onMsgPush();
				    }


				    __c_b_app.http.get(__c_b_app.env.Api.urls.get_msg + 42342342 + "/" + 20 + "/1", function(r) {
				    	console.log(r)
				    })

					scope.init();
	    	}
	    };
});