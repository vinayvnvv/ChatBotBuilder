var Utility = function() {
  
  this.matchQuery = function(q, docs) { //returns matched doc if matched, else return false

  	for(var j=0;j<docs.length;j++) {
  		var arr = docs[j].matches;
  		for(var i=0;i<arr.length;i++) {
	        if(arr[i].toLowerCase() == q.toLowerCase())
	        return docs[j];
          }

  	}
    
     return false;
  }


  this.incObj = function(n) {
        if(typeof(n) != 'number') {
            return "" + (parseInt(n)+1);
        } else {
            return ++n;
        }
  }
  
}

module.exports = Utility;