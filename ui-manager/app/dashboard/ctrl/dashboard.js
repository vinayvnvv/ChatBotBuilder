app.controller('dashboardCtrl', ['$scope', '$http', 'Strings', '$rootScope', '$mdDialog', function($scope, $http, Strings, $rootScope, $mdDialog){
	console.log("called dashboard ctrl...Id :  " + $rootScope._auth_user_id);

	//init vars  
	$scope.moduleData = [];
	//init template Urls
	$rootScope.rightBarTemplate = Strings.templateUrl.statsView;

    $scope.getModules = function() {

      $rootScope.leftBarLoader = true;
    	$http.get(Strings.apis.getModules + $rootScope._auth_user_id).then(function(res) {
       		$scope.moduleData = res.data;
       		$rootScope.leftBarLoader = false;
		}, function(err) {
			$rootScope.leftBarLoader = false;
		})

    }


    $scope.openModule = function(module, index) {
    	$scope.moduleSelectedData = module;
    	$rootScope.rightBarTemplate = "";
    	$rootScope.rightBarTemplate = Strings.templateUrl.moduleView;
    	console.log("selected Module", module)
    }


    $scope.openCreateModuleDialog = function(ev) {
      $mdDialog.show({
            controller: 'createModuleCtrl',
            templateUrl: 'app/dashboard/html/create_module_dialog.html',
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














    //init calls
    $scope.getModules();
	

	

  
	
}]);