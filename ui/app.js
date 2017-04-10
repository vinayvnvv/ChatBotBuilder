/**
* ChatBot Module
*
* Description
*/
var app = angular.module('ChatBot', ['ngAnimate']);

app.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'http://127.0.0.1:3000/**']);
 });



app.config(function() {
	console.log("called theme co nfig")
	var color = "#00ACC1";
	var style = angular.element('<style></style>');
            angular.element(document.body).append(style);
            css = `
                   .chat .container .msg.me .body { background-color: ` + color +  ` }
                   .chat .toolbar { background-color: ` + color +  `; color:#fff; }
                   .sug-option:hover { background-color: ` + color +  `; color:#fff; }
                   .sug-list:hover { background-color: ` + color +  `; color:#fff; }
                   .chat { height:80%; width:300px; }
                   .chat { top:0; }
                   .opnbtn { background-color: ` + color +  `; }
            `;
                    style.html(css);
})


