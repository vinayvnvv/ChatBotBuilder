app.controller('menuBarCtrl', ['$scope', '$rootScope', 'Strings', 'Api', 'Service', function($scope, $rootScope, Strings, Api, Service) {

	console.log("called menuBarCtrl")
	$scope.isOpen = {
        editMenus: false
    };
    $scope.isLoading = {
        editMenus:false
    }

    $scope.openEditMenusUI = function() {
      	$scope._edit_menu_menus = JSON.parse(JSON.stringify($rootScope[Strings.selected.module].menus));
    	$scope.isOpen.editMenus = true;
    }

    $scope.cancelEditModuleMatchUI = function() {
        $scope.isOpen.editMenus = false;
    }


     $scope.editMenusOfMenu = function(menus) {
        console.log("menus", menus)
        var data = {
            menus: menus
        };
        $rootScope[Strings.selected.module].menus = menus;
        $scope.isLoading.editMenus = true;

        Api.updateModule(data).then(function(res) {
               console.log(res);
               $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
               Service.Toast(" Menu Items is Updated!");
               $scope.isLoading.editMenus = false;
               $scope.isOpen.editMenus = false;

           }, function(err) {
              Service.Toast("Error in Updation!");
              $scope.isLoading.editMenus = false;
              $scope.isOpen.editMenus = false;
              $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
           })   



    }



	
}])