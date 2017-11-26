var fs = require('fs')
var reWrite = function() {
	this.writeAt = function(index, file) {
		// fs.readFile(file, 'utf8', function (err,data) {

		// 	fs.writeFile("bot/build/script_prod.js", contents, function(err) {

		// 	}
		// }
	}
}
var Parser = function() {
	this.parseTemplateUrl = function(file, base_url, callback) {
			var contents;
			var matched_data = [];
			fs.readFile(file, 'utf8', (err,data) => {
			  if (err) {
			    return console.log(err);
			  }
			  contents = data;
			  var matched = contents.match(/__c_b_env.template.attachByUrl(\([^\)]*\)(\.[^\)]*\))?)/gi);
			  //console.log("matched----.>>>>", matched);
			  // contents = contents.replace(/__c_b_env.template.attachByUrl(\([^\)]*\)(\.[^\)]*\))?)/gi, function(match, p1, offset, string) {
			  // 	var url = (p1.split(",")[0]).split("\"")[1];
			  // 	return fs.readFile(base_url + url, 'utf8', function (err,data) {
			  // 		replaced++;
			  // 		console.log("replaced-->", replaced)
			  // 		return data;
			  // 	});
			  // });
			  var index = 0;
			  this.iterateMatchArray(index, base_url, matched, matched_data, callback, contents);
			  

			 


			});

	}

	this.iterateMatchArray = function(index, base_url, matched, matched_data, callback, contents) {

		var url = (matched[index].split(",")[0]).split("\"")[1];
		fs.readFile(base_url + url, 'utf8', (err,data) => {
				  		matched_data.push({el: matched[index].split(",")[1].split("\)")[0],data: data});
				  		if(index == matched.length-1)
				  			this.parseTemplateText(matched_data, contents, callback);
				  		else 
				  			this.iterateMatchArray(index+1, base_url, matched, matched_data, callback, contents);
				  	});
	}

	this.parseTemplateText = function(data, contents, callback) {
		 var index = -1;
		 contents = contents.replace(/__c_b_env.template.attachByUrl(\([^\)]*\)(\.[^\)]*\))?)/gi, function(match, p1, offset, string) {
			  	index++;	
			  	return data[index].el + ".innerHTML = `" + data[index].data + "`";
			});
		fs.writeFile("bot/build/script_prod.js", contents, function(err) {
		    if(err) {
		        return console.log(err);
		    }
		}); 
	}
}

module.exports = new Parser();