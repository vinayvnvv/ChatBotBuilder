//types
var __c_b_app_Controller = function(name, controller) {
	this.name = name;
	this.controller = controller;
}

//api services
var __c_b_app_Api_Service = function() {
	this.host = ( (location.hostname == '127.0.0.1' || location.hostname == 'localhost') ?  "http://127.0.0.1:3000/" : "https://botflow.herokuapp.com/");
    this.urls = {
    	socket_connect: this.host + "sockets/bot",
    	get_msg: this.host + "api/bot/msgs/",
    	sounds: {
    		bot: this.host + "bot/sound/bot.mp3",
    		user: this.host + "bot/sound/user.mp3"
    	}
 	}
}




var __c_b_app = new function() {

	//env
	this.env = {
		host: "http://localhost:3000",
		vars: {
			bot_id_selecter_attr: "chat-bot-id",
			pagination: {
				limit: 20
			}
		},
		bot_id: null,
		cookie: {
			uuid_key:"__chat__bot__uuid__"
		},
		Api: new __c_b_app_Api_Service(),
		ref: {
			root: {
				ele: {
					name: "bot-flow-root",
					elm: null
				},
				style: {
					name: "bot-flow-style-root",
					elm: null
				}
			}	
		}
	}

	//roootScope
	this.rootScope = {
		name: "Bot"
	}

	//list of controller array of type <__c_b_app_Controller>
	this.controllers = [];
	this.run = null;
	this.service = {};

	//run function will called at first time
	this.runApp = function(_function) {
		this.run = _function;
	}

	this.addService = function(name, _service) {
		this.service[name] = new _service();
	}

	//add controller function
	this.addController = function(name, _function) {
		this.controllers.push(new __c_b_app_Controller(name, _function));
	}


	this.runControllers = function() {  //run all the controllr in array
		for(var i=0; i<this.controllers.length; i++) {
			this.controllers[i].controller();
		}
	}




	this.bootApp = function() {
		this.run();
		this.runControllers();
	}
	



}
