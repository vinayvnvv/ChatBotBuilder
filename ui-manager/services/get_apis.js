app.service('Api', ['$http', 'Strings', '$rootScope', function($http, Strings, $rootScope) {
	
  
  //create module
 //  data = {
	// "name" : "aa pizza",
	// "matches": ["order pizza", "book pizza"]
 //   }
  this.createModule = function(type, data) {
     data.type = type;
     console.log("insertion data", data);
     return $http({
                method: 'POST',
                url: Strings.apis.createModules + $rootScope._auth_user_id,
                data: data
            });
  }


  this.updateModule = function(data) {
     return $http({
                method: 'POST',
                url: Strings.apis.updateModules + $rootScope._auth_user_id + "/" + $rootScope[Strings.selected.module]._id,
                data: data
            });
  }





}])