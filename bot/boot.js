function createRootEle() {
	var rootEle = document.createElement(__c_b_env.ref.root.ele.name);
	//rootEle.setAttribute(__c_b_env.ref.root.ele.name, "");
	rootEle.id = __c_b_env.ref.root.ele.name;
	document.body.appendChild(rootEle);
	__c_b_env.ref.root.ele.elm = document.querySelectorAll("[" + __c_b_env.ref.root.ele.name + "]")[0];
}

function addRootStyles() {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.setAttribute(__c_b_env.ref.root.style.name, "");
	document.getElementsByTagName('head')[0].appendChild(style);
	__c_b_env.ref.root.style.elm = document.querySelectorAll("[" + __c_b_env.ref.root.style.name + "]")[0];
	__c_b_env.template.attachByUrl("style/style.css", __c_b_env.ref.root.style.elm)
}


function initApp() {
	rivets.bind(document.querySelector("#" + __c_b_env.ref.root.ele.name), __c_b_env_rootScope);
}


function bootApp() {
	addRootStyles();
	createRootEle();
	initApp();
}

window.onload = bootApp();