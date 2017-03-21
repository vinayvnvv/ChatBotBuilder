app.controller('dashboardCtrl', ['$scope', '$http', 'Strings', '$rootScope', function($scope, $http, Strings, $rootScope){
	console.log("called dashboard ctrl...");

	//init vars
	$scope.moduleData = [];
	//init template Urls
	$rootScope.rightBarTemplate = Strings.templateUrl.statsView;

    $scope.getModules = function() {

      $rootScope.leftBarLoader = true;
    	$http.get(Strings.apis.getModules + $rootScope._auth_user_id).then(function(res) {
       		$scope.moduleData = res.data;
       		$rootScope.leftBarLoader = false;
		}, function(err) {
			$rootScope.leftBarLoader = false;
		})

    }


    $scope.openModule = function(module, index) {
    	$scope.moduleSelectedData = module;
    	$rootScope.rightBarTemplate = "";
    	$rootScope.rightBarTemplate = Strings.templateUrl.moduleView;
    	console.log("selected Module", module)
    }














    //init calls
    $scope.getModules();
	

	

  
	
}]);