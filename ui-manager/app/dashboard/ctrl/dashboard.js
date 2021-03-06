app.controller('dashboardCtrl', ['$scope', '$http', 'Strings', '$rootScope', '$mdDialog', 'Service', 'Api', function($scope, $http, Strings, $rootScope, $mdDialog, Service, Api){
	console.log("called dashboard ctrl...Id :  " + $rootScope._auth_user_id);

	//init vars  
	$scope.moduleData = [];
	//init template Urls
	$rootScope.rightBarTemplate = Strings.templateUrl.statsView;
  $scope.middleBarTemplate = null;
  $scope.leftBarSearch = {};
  $rootScope.flowFullScreen = false;
 
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


    $scope.closeModuleView = function() {
      $rootScope.rightBarTemplate = Strings.templateUrl.statsView;
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


      $scope.selectTypeModule = function(type) {
        if(type=="flow") {
          $scope.setFlowSelectedStyle();
        } else {
          $scope.setMenuSelectedStyle();
        }
      }

      $scope.setFlowSelectedStyle = function() {
         $scope.leftBarSearch.type='flow';
         $scope.flowSelectedClass = "tab-selected";
         $scope.menuSelectedClass = "tab-unselected";
      }  

      $scope.setMenuSelectedStyle = function() {
        $scope.leftBarSearch.type='menu';
         $scope.flowSelectedClass = "tab-unselected";
         $scope.menuSelectedClass = "tab-selected";
      }  



      $scope.openDeleteModuleDialog = function(ev) {
        
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                  .title('Would you like to delete Module?')
                  .textContent('No longer available after delete.')
                  .ariaLabel('Delete')
                  .targetEvent(ev)
                  .clickOutsideToClose(true)
                  .ok('Confirm Delete')
                  .cancel('Cancel');

                $mdDialog.show(confirm).then(function() {
                     Service.loader.showRoot("Deleting Module..");
                        Api.deleteModule().then(function(res) {
                           Service.loader.hideRoot();
                           console.log(res);
                           Service.Toast("Module Deleted SuccessFully!");
                           $rootScope.getModules('Updating...');
                           $scope.closeModuleView();
                       }, function(err) {
                           Service.loader.hideRoot();
                       }) 
                }, function() {
                      Service.Toast("Cancelled Deletion!");
                });
          


      }


      $scope.toggleFullScreen = function() {
        $rootScope.flowFullScreen = !$rootScope.flowFullScreen;
      }



      $scope.deleteFlowItem = function(at, ev) {

            var confirm = $mdDialog.confirm()
                  .title('Would you like to delete Flow Item?')
                  .textContent('No longer available after delete.')
                  .ariaLabel('Delete')
                  .targetEvent(ev)
                  .clickOutsideToClose(true)
                  .ok('Confirm Delete')
                  .cancel('Cancel');

                $mdDialog.show(confirm).then(function() {
                       $rootScope.itemCreateModuleLoaderTitle = "Deleting...";
                       $rootScope[Strings.selected.moduleIndexSelectedLoader] = at;
                       var module_str = JSON.parse(JSON.stringify($rootScope[Strings.selected.module].modules));
                       var modules = Service.removeModuleAt(module_str, at);
                       var data = {
                                   modules: modules
                               };

                       Api.updateModule(data).then(function(res) {
                           $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
                           console.log(res);
                           Service.Toast("Flow Item is Deleted!");
                           $rootScope[Strings.selected.module].modules = modules; 
                       }, function(err) {
                           $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
                           Service.Toast("Error In Deleting Flow Item!");
                       })        
                }, function() {
                      Service.Toast("Cancelled Deletion!");
                });



          

      
    }
    
















    //init calls
    $scope.getModules();
    //call default selection type
    $scope.setFlowSelectedStyle();
	

	

  
	
}]);