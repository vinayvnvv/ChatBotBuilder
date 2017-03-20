app.controller('dashboardCtrl', ['$scope', '$http', 'Strings', function($scope, $http, Strings){
	console.log("called dashboard ctrl...");

	$http.get(Strings.apis.getModules + '123').then(function(res) {
       console.log(res)
	})

	

  
	
}]);