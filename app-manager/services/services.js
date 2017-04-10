var Service = function() {
  
  this.getCreatedTimeStamp = function(type) {
  	var obj = {};
  	   obj.at = new Date();
  	return obj;
  }

  this.getUpdatedTimeStamp = function(type) {
  	var obj = {};
  	   obj.at = new Date();
  	return obj;
  }



}

module.exports = new Service();