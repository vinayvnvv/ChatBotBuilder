app.controller('dashboardCtrl', ['$scope', '$http', 'Strings', '$rootScope', '$mdDialog', 'Service', function($scope, $http, Strings, $rootScope, $mdDialog, Service){
	console.log("called dashboard ctrl...Id :  " + $rootScope._auth_user_id);

	//init vars  
	$scope.moduleData = [];
	//init template Urls
	$rootScope.rightBarTemplate = Strings.templateUrl.statsView;

    $rootScope.getModules = function(title) {

      Service.loader.showLeftBar(title);
    	$http.get(Strings.apis.getModules + $rootScope._auth_user_id).then(function(res) {
       		$scope.moduleData = res.data;
       		Service.loader.hideLeftBar();
		}, function(err) {
			    Service.loader.hideLeftBar();
		})

    }


    $scope.openModule = function(module, index) {
    	$rootScope[Strings.selected.module] = module;
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


    $scope.openModuleItemDialog = function(index, ev) {
      $rootScope[Strings.selected.moduleIndex] = index;
      $mdDialog.show({
            controller: 'moduleItemCtrl',
            templateUrl: 'app/dashboard/html/module_item_dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:false,
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