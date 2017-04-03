app.controller('mainApp', ['$scope', '$mdDialog', '$rootScope', 'Strings', 'Models', 'Api', 'Service', function($scope, $mdDialog, $rootScope, Strings, Models, Api, Service){

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


  $rootScope.getMyBot = function(ev) {
      $mdDialog.show({
            controller:"myBotCtrl",
            templateUrl: 'templates/get-bot.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: true // Only for -xs, -sm breakpoints.
          })
          .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          });
    }


    $rootScope.closeDialog = function() {
      $mdDialog.cancel();
  }


  
	
}]);