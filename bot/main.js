
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