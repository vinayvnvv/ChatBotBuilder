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

}

module.exports = new Models();