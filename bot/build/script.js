//pre-assignation


//final var
var __c_b_env = {
	host: "http://localhost:3000",
	vars: {},
	bot_id: null,
	ref: {
		root: {
			ele: {
				name: "bot-flow-root",
				elm: null
			},
			style: {
				name: "bot-flow-style-root",
				elm: null
			}
		}	
	}
}
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



__c_b_env.http = {
	get: __c_b_envHttpGet,
	post: __c_b_envHttpPost
}

function __c_b_envTemplateAttachByUrl(url, el, callback) {
	__c_b_env.http.get(url, function(res) {
		el.innerHTML = res;
		if(callback) callback();
	}, function(err) {
		console.log(err);
	})
}

__c_b_env.template = {
	attachByUrl: __c_b_envTemplateAttachByUrl
}

function bootApp() {

addRootStyles();

function addRootStyles() {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.setAttribute(__c_b_env.ref.root.style.name, "");
	document.getElementsByTagName('head')[0].appendChild(style);
	__c_b_env.ref.root.style.elm = document.querySelectorAll("[" + __c_b_env.ref.root.style.name + "]")[0];
	__c_b_env.template.attachByUrl("style/style.css", __c_b_env.ref.root.style.elm)
}


console.log(__c_b_env)

//create bot element
var rootEle = document.createElement("div");
rootEle.setAttribute(__c_b_env.ref.root.ele.name, "");
rootEle.innerHTML = "hello world";
document.body.appendChild(rootEle);
__c_b_env.ref.root.ele.elm = document.querySelectorAll("[" + __c_b_env.ref.root.ele.name + "]")[0];

setTimeout(function() {
	__c_b_env.ref.root.ele.elm.innerHTML = "changing";
}, 4000);
//document.getElementById('someElementId').className = 'cssClass';



	setTimeout(function() {
		__c_b_env.template.attachByUrl("test/tmp.html", __c_b_env.ref.root.ele.elm);
	}, 2000);

}

window.onload = bootApp();