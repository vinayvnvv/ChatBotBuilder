var Parser = function() {

	this.ansParser = function (obj, ans) {
		console.log("parsing answers")
		console.log(ans)
		if(ans == undefined) ans = [];
	    var obj_str = JSON.stringify(obj);
    
		    obj_str = obj_str.replace(/{{\s*\$flow\[([0-9])+\]\s*}}/gi, function($1) {
		    	console.log(ans)
		        var _a =  ans[$1.replace(/[^0-9]*/g,'')];
		        if(_a == undefined) return "";
		        return _a;
		    });
    
    	return JSON.parse(obj_str);
  }
}

module.exports = new Parser();