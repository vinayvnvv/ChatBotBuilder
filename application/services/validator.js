var Validator = function() {


	this.isNum = function (s) {
    	return !isNaN(s);
	}

	this.isEmail = function(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}


	this.isValid = function(query, obj) {

		if(obj.type == 'number') {
			return this.isNum(query);
		}
		if(obj.type == 'email') {
			return this.isEmail(query);
		}
		if(obj.type == 'pattern') {
			var regex = new RegExp(type, '');
			return regex.test(query);
		}

	}

}

module.exports = Validator;