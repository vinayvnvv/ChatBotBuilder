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
	 __c_b_env.ref.root.style.elm.innerHTML = `.cssClass { color: #F00; }`
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
		 __c_b_env.ref.root.ele.elm.innerHTML = `
<div ng-draggable='dragOptions' class="chat zoomInDown" ng-show="chatOpened" ng-init="chatOpened = false">

		<div class="toolbar valign-center" >
		          <div class="title">Help Assistant</div>
		          <div class="action" ng-click="chatOpened = false"> <i class="material-icons">close</i> </div>
        </div>




		<div class="container">
		        <div class="load-more zoomInDown" ng-if="moreLoading"><span><i class="material-icons">settings_backup_restore</i>Loading</span></div>
				<li ng-animate="'animate'" ng-repeat="m in msgs track by $index" class="animation msg {{m.by || 'bot'}} {{m.msg.msg_style}} valign-center">
				<div ng-if="m.by == 'bot'" class="icon valign-center"><i class="material-icons">toys</i></div>
				<div class="body" ng-include src="_chat_bot_msgs_template_"></div>
				</li>
				<div ng-if="suggestion" ng-include="suggestion_template" class="sug-container"></div>
				
				<div style="display:{{typing}}" class="msg bot typing">...</div>
		</div>

		<div class='field'>
            <input type="text" placeholder="Ask Me" ng-model="_chat_bot_query_" ng-keyup="bindQueryOnPress($event)"  />
        <fab-button class="md-fab md-mini md-primary send-fab valign-center" aria-label="Use Android" ng-disabled="_chat_bot_query_ == '' || _chat_bot_query_ == undefined " ng-click="bindQueryOnClick()">
          <md-icon class="icon"><i class="material-icons" style="font-size: 19px">send</i></md-icon>
        </fab-button>

		</div>




</div>

<div ng-show="!chatOpened" class="opnbtn zoomInDown" ng-click="scrollToBottomOnOpen()">
	<div class="title valign-center">Help Bot</div>
	<div class="icon valign-center"><i class="material-icons">chat</i></div>
</div>

`;
	}, 2000);

}

window.onload = bootApp();