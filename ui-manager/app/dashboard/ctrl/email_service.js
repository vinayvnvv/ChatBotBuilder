app.controller('emailService', ['$scope', '$rootScope', '$mdDialog', 'Service', 'Strings', 'Api', function($scope, $rootScope, $mdDialog, Service, Strings, Api) {
	console.log("called email service modal");

	$scope.formVars = {};
	$scope.err = {};
	$scope.action = $rootScope.serviceModalInfo.mode;
	if($rootScope.serviceModalInfo.mode == 'edit') {
		$scope.formVars = $rootScope[Strings.selected.module].services.email[$rootScope.serviceModalInfo.index];
	}


	$scope.closeDialog = function() {
      $mdDialog.cancel();
    }
	
	$scope.update = function() {
		$scope.err.show = true;	
		var emailData;
		if($scope.emailServiceForm.$valid && $scope.emailServiceForm.to.$viewValue.length>0) {  //valid form

               if($rootScope.serviceModalInfo.mode == 'insert') {
                	emailData= Service.addModuleAt(0, $rootScope[Strings.selected.module].services.email, $scope.formVars, 'insert');
           		} else  {
           			emailData= Service.addModuleAt($rootScope.serviceModalInfo.index, $rootScope[Strings.selected.module].services.email, $scope.formVars, 'edit');
           		}
               var data = {
               	  "services.email": emailData
               } 

              Service.loader.showRoot('Updating....');	
              Api.updateModule(data).then(function(res) {

              	   console.log(res)
              	   Service.loader.hideRoot();
             	   $mdDialog.cancel(); //cancel dialog
             	   Service.Toast("Service is Updated!");

              }, function(err) {
              	  Service.loader.hideRoot();
              	  Service.Toast("Error , Try again!");

              });



		} 
		
	}
}])