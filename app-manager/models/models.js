var Models = function() {

	this.modules_insert = function(data) {
		if(data == undefined || data == null )  {
			console.error("insert model error!");
	       	return false;
		}
	       var field = ["name", "matches", "type"];
	       var model = {};
	       for(var i = 0;i< field.length; i++) {
	       	  if(data[field[i]] == null || data[field[i]] == undefined) {
	       	  	console.error("insert model error!");
	       	  	return false;
	       	  } else {
	       	  	model[field[i]] = data[field[i]];
	       	  }
	       }


	       //add defaults
	       model.statastics = {
	       	      triggered:0,
	       	      triggeredAt:null
	       };
	       model.final = {
	       	  msg:undefined
	       };
	       model.services = {
	       	  	   email:[],
	       	  	   api:[]
	       	};
	       model.welcome = {
	       	msg:undefined
	       }
    
	       return model;
	}


	this.menu_insert = function(data) {
		if(data == undefined || data == null )  {
			console.error("insert model error!");
	       	return false;
		}
	       var field = ["name", "matches", "type", "menus"];
	       var model = {};
	       for(var i = 0;i< field.length; i++) {
	       	  if(data[field[i]] == null || data[field[i]] == undefined) {
	       	  	console.error("insert model error!");
	       	  	return false;
	       	  } else {
	       	  	model[field[i]] = data[field[i]];
	       	  }
	       }

	       //default values validaTE
	       if(data.menu_type == undefined || data.menu_type == null || data.menu_type == '') model.menu_type = 'list';
    
	       return model;
	}





	this.success_obj = function(data) {
       var obj = {
       	    success:1,
       	    msg:data
       }
       return obj;
	}

	this.error_obj = function(data) {
       var obj = {
       	    success:0,
       	    msg:data
       }
       return obj;
	}


	this.getModuleModel = function(model) {
		if(!model.msg) model.msg = [];


		return model;
	}


}

module.exports = new Models();