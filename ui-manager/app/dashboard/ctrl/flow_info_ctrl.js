app.controller('flowInfoCtrl', ['$scope', '$rootScope', 'Strings', 'Api', 'Service', function($scope, $rootScope, Strings, Api, Service) {
    
    console.log("called flow info ctrl")

    //init
    $scope.isOpen = {
        editName: false,
        editMatches:false
    };
    $scope.isLoading = {
        editName:false,
        editMatches:false
    }


   $scope.$watch(function() {
      return $rootScope.moduleSelectedData;
    }, function() {
            //reset all events
      $scope.isOpen = {};
      $scope.isLoading = {};
    }, true);

    $scope.openEditModuleNameUI = function() {
      $scope._edit_module_name = $rootScope[Strings.selected.module].name;
    	$scope.isOpen.editName = true;
    }
	
	$scope.cancelEditModuleNameUI = function() {
    	$scope.isOpen.editName = false;
    }

    $scope.openEditModuleMatchUI = function() {
        $scope._edit_module_match = JSON.parse(JSON.stringify($rootScope[Strings.selected.module].matches));
        $scope.isOpen.editMatches = true;
    }
    
    $scope.cancelEditModuleMatchUI = function() {
        $scope.isOpen.editMatches = false;
    }



    $scope.editNameOfModule = function(name) {
        console.log("name", name)
        var data = {
            name: name
        };
        $rootScope[Strings.selected.module].name = name;
        $scope.isLoading.editName = true;

        Api.updateModule(data).then(function(res) {
               console.log(res);
               $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
               Service.Toast(" Name is Updated!");
               $scope.isLoading.editName = false;
               $scope.isOpen.editName = false;

           }, function(err) {
              Service.Toast("Error in Updation!");
              $scope.isLoading.editName = false;
              $scope.isOpen.editName = false;
              $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
           })   



    }



    $scope.editMatchOfModule = function(matches) {
        console.log("match", matches)
        var data = {
            matches: matches
        };
        $rootScope[Strings.selected.module].matches = matches;
        $scope.isLoading.editMatches = true;

        Api.updateModule(data).then(function(res) {
               console.log(res);
               $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
               Service.Toast(" matches is Updated!");
               $scope.isLoading.editMatches = false;
               $scope.isOpen.editMatches = false;

           }, function(err) {
              Service.Toast("Error in Updation!");
              $scope.isLoading.editMatches = false;
              $scope.isOpen.editMatches = false;
              $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
           })   



    }



}])