app.controller('loginCtrl', ['$scope', function($scope){
	console.log("called Login Ctrl");



  (function() {

  	  var p = 	document.createElement('script');
          p.type = 'text/javascript';
          p.async = true;
          p.src = "https://apis.google.com/js/platform.js?onload=renderButton";
          document.body.insertBefore(p, document.body.childNodes[0]);
          console.log("hhhhhhhhhhhhhhh")

  })();
	




}])