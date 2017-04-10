app.controller('settingCtrl', ['$scope', '$mdDialog', 'Strings', function($scope, $mdDialog, Strings){
	console.log("called Setting ctrl")


	$scope.themeNames = Strings.themeNames;
	$scope.setting_theme_name = ( (localStorage.getItem('appThemeName') == null) ?  'brown' : localStorage.getItem('appThemeName')  );

	$scope.closeDialog = function() {
      $mdDialog.cancel();
  	}


    $scope.changeTheme = function() {
    	localStorage.setItem("appThemeName", $scope.setting_theme_name);
    	location.reload();
    }


}])