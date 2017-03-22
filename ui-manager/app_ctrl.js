app.controller('mainApp', ['$scope', '$mdDialog', '$rootScope', function($scope, $mdDialog, $rootScope){

	console.log("called main controller");
    
    (function() {

  	  var p = 	document.createElement('script');
          p.type = 'text/javascript';
          p.async = true;
          p.src = "https://apis.google.com/js/platform.js?onload=renderButton";
          document.body.insertBefore(p, document.body.childNodes[0]);

  })();
	

  $rootScope.toggleMainMenu = function(e) {
    e = angular.element(e.target);
    if($rootScope.toggleMenuStatus == '-300px') {
      $rootScope.toggleMenuStatus = '0px';
      e.css('transition', '0.3s');
      e.css('transform', 'rotate(0deg)');

    } else {
      $rootScope.toggleMenuStatus = "-300px"
      e.css('transition', '0.3s');
      e.css('transform', 'rotate(90deg)');
    }
  }

  
	
}]);