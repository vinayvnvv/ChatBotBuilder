//types
var __c_b_app_Controller = function(name, controller) {
	this.name = name;
	this.controller = controller;
}




var __c_b_app = new function() {

	//env
	this.env = {
		host: "http://localhost:3000",
		vars: {},
		bot_id: null,
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

	//run function will called at first time
	this.runApp = function(_function) {
		this.run = _function;
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
