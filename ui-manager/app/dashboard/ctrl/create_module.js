app.controller('createModuleCtrl', ['$scope', '$mdDialog', '$http', 'Api', '$rootScope', 'Service', function ($scope, $mdDialog, $http, Api, $rootScope, Service) {
	console.log("called create module ctrl");
    //init
    $scope.err = {};


  $scope.closeDialog = function() {
      $mdDialog.cancel();
  }


	$scope.create = function() {
		$scope.err.show = true;
        if($scope.errorCheck()) {
          var data = {
          			 "name" : $scope.create_module_name,
					       "matches": $scope.create_module_matches
					};
		  Service.loader.showRoot('Creating Modules....');			
          Api.createModule(data).then(function(res){
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
      if($scope.createModule.m_name.$invalid && $scope.createModule.m_match.$viewValue.length==0) return false;
      return true;
	}
}])