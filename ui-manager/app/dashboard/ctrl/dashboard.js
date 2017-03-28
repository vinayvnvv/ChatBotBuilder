app.controller('dashboardCtrl', ['$scope', '$http', 'Strings', '$rootScope', '$mdDialog', 'Service', function($scope, $http, Strings, $rootScope, $mdDialog, Service){
	console.log("called dashboard ctrl...Id :  " + $rootScope._auth_user_id);

	//init vars  
	$scope.moduleData = [];
	//init template Urls
	$rootScope.rightBarTemplate = Strings.templateUrl.statsView;
  $scope.middleBarTemplate = null;
 
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
      //set middle template
      console.log("module Type:" + module.type)
      if(module.type == 'flow') $scope.middleBarTemplate = Strings.templateUrl.flowView;
      if(module.type == 'menu') $scope.middleBarTemplate = Strings.templateUrl.menuView;

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
            clickOutsideToClose:false,
            fullscreen: true // Only for -xs, -sm breakpoints.
          })
          .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          });
    }

    $scope.openCreateMenuDialog = function(ev) {
      $mdDialog.show({
            controller: 'createMenu',
            templateUrl: 'app/dashboard/html/create-menu-dialog.html',
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





    $scope.openModuleItemDialog = function(index, ev, type) {
      console.log("type from dash", type);
      if(type != 'insert') --index;
      $rootScope[Strings.selected.moduleIndex] = index;
      $rootScope[Strings.selected.openModuleItemDialogType] = type;
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



     $scope.openWelcomeModuleDialog = function(index, ev) {
      $rootScope[Strings.selected.moduleIndex] = index;
      $mdDialog.show({
            controller: 'welcomeMsgSetCtrl',
            templateUrl: 'app/dashboard/html/set_welcome_msg_dialog.html',
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

    $scope.openFinalModuleDialog = function(index, ev) {
      $rootScope[Strings.selected.moduleIndex] = index;
      $mdDialog.show({
            controller: 'finalMsgSetCtrl',
            templateUrl: 'app/dashboard/html/set_final_msg_dialog.html',
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