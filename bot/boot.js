

function createRootEle(callback) {
	var rootEle = document.createElement(__c_b_app.env.ref.root.ele.name);
	//rootEle.setAttribute(__c_b_app.env.ref.root.ele.name, "");
	rootEle.id = __c_b_app.env.ref.root.ele.name;
	var a = document.body.appendChild(rootEle);
	__c_b_app.env.ref.root.ele.elm = document.querySelectorAll("[" + __c_b_app.env.ref.root.ele.name + "]")[0];
	var intervalId = null;
	intervalID = setTimeout( function() {
		if(document.querySelectorAll("bot-flow-root")[0]) {
			callback();
			clearInterval(intervalId);
		}
	}, 1)
	setTimeout(function() { clearInterval(intervalId); }, 15000);
}

function addRootStyles() {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.setAttribute(__c_b_app.env.ref.root.style.name, "");
	document.getElementsByTagName('head')[0].appendChild(style);
	__c_b_app.env.ref.root.style.elm = document.querySelectorAll("[" + __c_b_app.env.ref.root.style.name + "]")[0];
	__c_b_app.template.attachByUrl("style/style.css", __c_b_app.env.ref.root.style.elm)
}


function initApp() {
	__c_b_app.bootApp();
}


__c_b_app.runApp(function() {
	// rivets.bind(document.querySelector("#" + __c_b_app.env.ref.root.ele.name), __c_b_app.rootScope);
	var tag = document.querySelector("#" + __c_b_app.env.ref.root.ele.name);  // take the tag
	alight.bootstrap([tag]);  // bind to DOM
});




function bootApp() {
	addRootStyles();
	createRootEle(function() {
		initApp();
	});
}

window.onload = bootApp();