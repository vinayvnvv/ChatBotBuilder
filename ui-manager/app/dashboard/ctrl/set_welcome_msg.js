app.controller('welcomeMsgSetCtrl', ['$scope', '$rootScope', 'Strings', '$mdDialog', 'Api', 'Service', function($scope, $rootScope, Strings, $mdDialog, Api, Service) {
	console.log("called welcomeMsgSetCtrl");
	//init
	$scope.err = {};

	//check action type
	if(!$rootScope[Strings.selected.module].welcome) { //insert
		$scope.action = "Create";
    $rootScope.welcomeCreateModuleLoaderTitle = "Creating..";
    $scope.toastTitle = "Welcome Module is Created!";
	} else { //update
		$scope.action = "Edit";
    $rootScope.welcomeCreateModuleLoaderTitle = "Updating..";
    $scope.toastTitle = "Welcome Module is Updated!";
    var d = JSON.stringify($rootScope[Strings.selected.module].welcome.msg);
    d = JSON.parse(d);
		$scope.create_welcome_array = d;
	}

	$scope.closeDialog = function() {
      $mdDialog.cancel();
 	}

 	$scope.create = function() {
 		$scope.err.show = true;
 		if( $scope.validateInput() ) {

 		   $rootScope[Strings.selected.module].welcome = {};
 		   $rootScope[Strings.selected.module].welcome.msg = $scope.create_welcome_array; 
       $rootScope[Strings.selected.moduleIndexSelectedLoader] = 'welcome'; 


           var data = {
           	  welcome: {
           	  	         msg: $scope.create_welcome_array
           	  	     }
           };

           Api.updateModule(data).then(function(res) {
           	  console.log(res);
           	  $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
              Service.Toast($scope.toastTitle);

           }, function(err) {
              $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
           });

          $mdDialog.cancel(); 

 		}
 	}

 	$scope.validateInput = function() {
 		if($scope.welcomeModule.m_match.$viewValue.length==0) return false;
 		return true;
 	}


}])