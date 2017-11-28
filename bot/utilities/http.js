function __c_b_envHttpGet(url, success, error) {
	  var xhr = new XMLHttpRequest();
	  xhr.open("GET", url);
	  xhr.onload = function () {
	    if(success) success(xhr.response, xhr);
	  };
	  xhr.onerror = function () {
	    if(error) error(xhr.response);
	  };
	  xhr.send();
}

function __c_b_envHttpPost(url, success, error) {
	  var xhr = new XMLHttpRequest();
	  xhr.open(method, url);
	  xhr.onload = function () {
	    success(xhr.response);
	  };
	  xhr.onerror = function () {
	    error(xhr.response);
	  };
	  xhr.send();
}



__c_b_app.http = {
	get: __c_b_envHttpGet,
	post: __c_b_envHttpPost
}
