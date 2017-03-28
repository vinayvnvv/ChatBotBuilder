app.controller('createMenu', ['$scope', '$mdDialog', '$rootScope', 'Service', 'Strings', 'Api', function($scope, $mdDialog, $rootScope, Service, Strings, Api){
	console.log("called create menu dialog ctrl")
	   $scope.err = {};
	   $scope.menuTypes = Strings.menuTypes;

    

  $scope.closeDialog = function() {
      $mdDialog.cancel();
  }


	$scope.create = function() {
		$scope.err.show = true;
        if($scope.errorCheck()) {
          var data = {
          			 	   "name" : $scope.create_menu_name,
					       "matches": $scope.create_menu_matches,
					       "menu_type": $scope.create_menu_type,
					       "menus": $scope.create_menu_list
					};
		  Service.loader.showRoot('Creating Menu....');			
          Api.createModule("menu", data).then(function(res){
             console.log(res)
             Service.loader.hideRoot();
             $mdDialog.cancel(); //cancel dialog
             $rootScope.getModules('Updating...');
          }, function(err) {
             Service.loader.hideRoot();
          });
        }
	}


	$scope.errorCheck = function() {
      if(
      	  $scope.createModule.m_name.$invalid && 
      	  $scope.createModule.m_match.$viewValue.length==0 &&
      	  $scope.createModule.m_type.$invalid &&
      	  $scope.createModule.m_list.$viewValue.length==0
      	) return false;
      return true;
	}


}])

