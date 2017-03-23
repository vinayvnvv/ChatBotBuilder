app.controller('moduleItemCtrl', ['$scope', '$rootScope', 'Strings', '$mdDialog', 'Models', 'Service', 'Api',  function($scope, $rootScope, Strings, $mdDialog, Models, Service, Api){
	console.log("called module item dialog ctrl : " + $rootScope[Strings.selected.moduleIndex]);

    //init
    $scope.err = {};
    $scope.validation_type_array = Strings.validationTypeArray;
    $scope.suggestion_type_array = Strings.suggestionTypeArray;
    $scope.c_m_input = {};
    console.log("select type", $rootScope[Strings.selected.openModuleItemDialogType])
    //check action type
      if($rootScope[Strings.selected.openModuleItemDialogType] == 'insert') { //insert
        $scope.action = "Create";
        $scope.actionMode = 'insert';
        $scope.c_m_input.validate = "none";
        $scope.c_m_input.shortcut = "none";
        $rootScope.itemCreateModuleLoaderTitle = "Creating...";
        $scope.toastTitle = "New Module Item is created!";
      } else { //update
        $scope.action = "Edit";
        $scope.actionMode = 'edit';
        $rootScope.itemCreateModuleLoaderTitle = "Updating...";
        $scope.toastTitle = "Module is Item Updated!";
        var d = JSON.stringify($rootScope[Strings.selected.module].modules[$rootScope[Strings.selected.moduleIndex]]);
        d = JSON.parse(d);
        //handle null inputs
        if(d.validate == null) d.validate = Strings.validationTypeArray[0].value;
        if(d.shortcut == null) d.shortcut = Strings.suggestionTypeArray[0].value;
        $scope.c_m_input = d;
      }


	$scope.closeDialog = function() {
      $mdDialog.cancel();
    }

    $scope.create = function() {
    	$scope.err.show = true;
    	if($scope.validateInputs()) {
           var item = Models.moduleItems($scope.createModule());
           var modules = Service.addModuleAt($rootScope[Strings.selected.moduleIndex], $rootScope[Strings.selected.module].modules, item, $scope.actionMode);
           
           $rootScope[Strings.selected.module].modules = modules; 
           $rootScope[Strings.selected.moduleIndexSelectedLoader] = $rootScope[Strings.selected.moduleIndex]; 

           var data = {
           	           modules: modules
           	       };

           Api.updateModule(data).then(function(res) {
               console.log(res);
               $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
               Service.Toast($scope.toastTitle);

           }, function(err) {
              $rootScope[Strings.selected.moduleIndexSelectedLoader] = null;
           })	       
             
           $mdDialog.cancel();

    	}
    }

    $scope.validateInputs = function() {
    	var Input = $scope.createModuleItem;
    	if(
               Input.m_name.$invalid == true ||
               Input.m_msg.$viewValue.length == 0 ||
             ( Input.m_val.$viewValue != 'none' && Input.m_vl_array.$viewValue.length == 0 ) ||
             ( Input.m_sug.$viewValue != 'none' && Input.m_sh_array.$viewValue.length == 0 )
    	  ) return false;

       return true; 		
    }

    $scope.createModule = function() {
    	var Input = $scope.createModuleItem;
    	var model = {
    		name: Input.m_name.$viewValue,
    		msg: Input.m_msg.$viewValue,
    		beforeMsg: Input.m_b_msg.$viewValue,
    		afterMsg: Input.m_a_msg.$viewValue,
    		shortcut: Input.m_sug.$viewValue,
    		shortcutData: Input.m_sh_array.$viewValue,
    		validate: Input.m_val.$viewValue,
    		validateErrMsg: Input.m_vl_array.$viewValue
    	}
    	return model;
    }

}]); 