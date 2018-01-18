webpackJsonp([3,5],{

/***/ 245:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(245)(__webpack_require__(347))

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(245)(__webpack_require__(348))

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "\n\n(function() {\n\n\tfunction initSticky() {\n\t\tdocument.body.onscroll = stickyPerform;\n\n\n\t\tfunction stickyPerform(ref) {\n\t\t\tvar top = document.body.scrollTop;\n\t\t\tvar stickies = document.querySelectorAll('[stick-from-top]');\n\t\t\t//console.log(stickies)\n\t\t\tfor(var i=0;i<stickies.length;i++) {\n\t\t\t\tif( ((document.body.scrollTop -  stickies[i].offsetTop) > 0 ) &&\n                \tstickies[i].getAttribute(\"sticked\") != 'true'\n                \t) {\n\n                   stickies[i].setAttribute(\"sticked\", true)\n                   stickies[i].setAttribute(\"sticked-top\", stickies[i].offsetTop)\n                   stickies[i].style.display = 'flex';\n                   stickies[i].style.width = stickies[i].offsetWidth + \"px\";\n                   stickies[i].style.left = stickies[i].offsetLeft;\n                   stickies[i].style.top = stickies[i].getAttribute(\"stick-from-top\");\n                   stickies[i].style.position = \"fixed\";\n                   stickies[i].classList.add('sticked');\n                   stickies[i].classList.add('hide-mobile');\n                   \n                } else if((document.body.scrollTop -  stickies[i].getAttribute(\"sticked-top\")) < 0)  {\n                   stickies[i].setAttribute(\"sticked\", false)\n                   stickies[i].style.position = \"relative\";\n                   stickies[i].style.left = \"auto\";\n                   stickies[i].style.width = \"auto\";\n                   stickies[i].style.display = 'block';\n                   stickies[i].classList.remove('sticked');\n                   stickies[i].classList.remove('hide-mobile');\n                }\n\n\t\t\t}\n\t\t}\n\n\t}\t\n\n\n\n\n\n\n    //init after DOM load\n\tdocument.addEventListener('DOMContentLoaded', initSticky , false);\n\n}) ();\n\n "

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "\n\n(function() {\n\n\tfunction initToggleClass() {\n\t    console.log(\"init toggle class\")\n\t\tvar tClass = document.querySelectorAll('[toggle-class]');\n\t\tconsole.log(tClass)\n\t\tfor(var i=0;i<tClass.length;i++) {\n\t\t\tconsole.log(tClass)\n\t\t\tobj = JSON.parse(tClass[0].attributes.getNamedItem('toggle-class').value);\n\t\t\tobj.status = false;\n\t\t\ttClass[0].setAttribute('toggle-class', JSON.stringify(obj));\n\t\t\ttClass[i].onclick = tClassPerform;\n\t\t}\n\n\n\t\tfunction tClassPerform(ref) {\n\t\t\tvar src = ref.target;\n\t\t\tobj = JSON.parse(src.attributes.getNamedItem('toggle-class').value);\n\t\t\tvar tClassFor = document.querySelectorAll('[toggle-class-id]');\n\t\t\tfor(var i=0;i<tClassFor.length;i++) {\n\t\t\t\tvar id = tClassFor[i].attributes.getNamedItem('toggle-class-id').value;\n\t\t\t\tif(id == obj.for) {\n\t\t\t\t\tif(obj.status) { //remove\n\t                   tClassFor[i].classList.remove(obj.class)\n\t\t\t\t\t} else { //add\n\t                   tClassFor[i].classList.add(obj.class)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tobj.status = !obj.status;\n\t\t\tsrc.setAttribute('toggle-class', JSON.stringify(obj));\n\t\t}\n\n\t}\t\n\n\n\n\tfunction initAddClass() {\n\t    console.log(\"init add class\")\n\t\tvar tClass = document.querySelectorAll('[add-class]');\n\t\tconsole.log(tClass)\n\t\tfor(var i=0;i<tClass.length;i++) {\n\t\t\ttClass[i].onclick = aClassPerform;\n\t\t}\n\n\n\t\tfunction aClassPerform(ref) {\n\t\t\tvar src = ref.target;\n\t\t\tobj = JSON.parse(src.attributes.getNamedItem('add-class').value);\n\t\t\tvar tClassFor = document.querySelectorAll('[add-class-id]');\n\t\t\tfor(var i=0;i<tClassFor.length;i++) {\n\t\t\t\tvar id = tClassFor[i].attributes.getNamedItem('add-class-id').value;\n\t\t\t\tif(id == obj.for) {\n\t                   tClassFor[i].classList.add(obj.class)\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t}\n\n\n\n\tfunction initRemoveClass() {\n\t    console.log(\"init remove class\")\n\t\tvar tClass = document.querySelectorAll('[remove-class]');\n\t\tconsole.log(tClass)\n\t\tfor(var i=0;i<tClass.length;i++) {\n\t\t\ttClass[i].onclick = rClassPerform;\n\t\t}\n\n\n\t\tfunction rClassPerform(ref) {\n\t\t\tvar src = ref.target;\n\t\t\tobj = JSON.parse(src.attributes.getNamedItem('remove-class').value);\n\t\t\tvar tClassFor = document.querySelectorAll('[remove-class-id]');\n\t\t\tfor(var i=0;i<tClassFor.length;i++) {\n\t\t\t\tvar id = tClassFor[i].attributes.getNamedItem('remove-class-id').value;\n\t\t\t\tif(id == obj.for) {\n\t                   tClassFor[i].classList.remove(obj.class)\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t}\t\n\n\n\n\n\n    function initClassAction() {\n\t\t//init after DOM load\n\t\tdocument.addEventListener('DOMContentLoaded', initToggleClass , false);\n\t\tdocument.addEventListener('DOMContentLoaded', initAddClass , false);\n\t\tdocument.addEventListener('DOMContentLoaded', initRemoveClass , false);\n\t}\n\n\tinitClassAction();\n\n\twindow[\"initClassAction\"] = initClassAction;\n\n}) ();\n\n "

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(254);
module.exports = __webpack_require__(253);


/***/ })

},[414]);
//# sourceMappingURL=scripts.bundle.js.map