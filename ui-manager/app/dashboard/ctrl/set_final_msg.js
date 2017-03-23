app.controller('finalMsgSetCtrl', ['$scope', '$rootScope', 'Strings', '$mdDialog', 'Api', 'Service', function($scope, $rootScope, Strings, $mdDialog, Api, Service) {
	console.log("called finalMsgSetCtrl");
	//init
	$scope.err = {};

	//check action type
	if(!$rootScope[Strings.selected.module].final) { //insert
		$scope.action = "Create";
    $rootScope.finalCreateModuleLoaderTitle = "Creating...";
    $scope.toastTitle = "Final Module is Created!";
	} else { //update
		$scope.action = "Edit";
    $rootScope.finalCreateModuleLoaderTitle = "Updating.."
    $scope.toastTitle = "Final Module is Updated!";
		var d = JSON.stringify($rootScope[Strings.selected.module].final.msg);
		d = JSON.parse(d);
		$scope.create_final_array = d;
	}

	$scope.closeDialog = function() {
      $mdDialog.cancel();
 	}

 	$scope.create = function() {
 		console.log("called created")
 		$scope.err.show = true;
 		if( $scope.validateInput() ) {

 		   $rootScope[Strings.selected.module].final = {};
 		   $rootScope[Strings.selected.module].final.msg = $scope.create_final_array; 
           $rootScope[Strings.selected.moduleIndexSelectedLoader] = 'final'; 


           var data = {
           	  final: {
           	  	         msg: $scope.create_final_array
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
 		if($scope.finalModule.m_match.$viewValue.length==0) return false;
 		return true;
 	}


}])