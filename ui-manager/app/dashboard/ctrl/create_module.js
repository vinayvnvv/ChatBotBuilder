app.controller('createModuleCtrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {
	console.log("called create module ctrl");


	$scope.closeDialog = function() {
      $mdDialog.cancel();
	}
}])