var Validator = function() {


	this.isNum = function (s) {
    	return !isNaN(s);
	}

	this.isEmail = function(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}


	this.isValid = function(query, type) {

		if(type == 'number') {
			return this.isNum(query);
		}
		if(type == 'email') {
			return this.isEmail(query);
		}

	}

}

module.exports = Validator;