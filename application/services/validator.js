var Validator = function() {


	this.isNum = function (s) {
    	return !isNaN(s);
	}

	this.isEmail = function(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}


	this.isValid = function(query, obj) {

		console.log("validation type---------->", obj)

		if(obj.type == 'number') {
			return this.isNum(query);
		}
		if(obj.type == 'email') {
			return this.isEmail(query);
		}
		if(obj.type == 'pattern') {
			var regex = new RegExp(obj.params.pattern, '');
			console.log(regex.test(query))
			return regex.test(query);
		}

	}

}

module.exports = Validator;