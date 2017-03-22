app.service('Api', ['$http', 'Strings', '$rootScope', function($http, Strings, $rootScope) {
	
  
  //create module
 //  data = {
	// "name" : "aa pizza",
	// "matches": ["order pizza", "book pizza"]
 //   }
  this.createModule = function(data) {
     data.type = "flow";
     return $http({
                method: 'POST',
                url: Strings.apis.createModules + $rootScope._auth_user_id,
                data: data
            });
  }

}])