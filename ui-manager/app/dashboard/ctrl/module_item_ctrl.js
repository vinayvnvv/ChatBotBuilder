app.controller('moduleItemCtrl', ['$scope', '$rootScope', 'Strings', '$mdDialog', function($scope, $rootScope, Strings, $mdDialog){
	console.log("called module item dialog ctrl : " + $rootScope[Strings.selected.moduleIndex]);

    //init
    $scope.validation_type_array = Strings.validationTypeArray;
    $scope.suggestion_type_array = Strings.suggestionTypeArray;
	$scope.closeDialog = function() {
      $mdDialog.cancel();
    }

}]);