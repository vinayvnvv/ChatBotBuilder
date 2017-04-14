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

  this.deleteModule = function(data) {
     return $http({
                method: 'DELETE',
                url: Strings.apis.deleteModules + $rootScope._auth_user_id + "/" + $rootScope[Strings.selected.module]._id
            });
  }



  this.updateInitBot = function(data) {
     return $http({
                method: 'POST',
                url: Strings.apis.updateInitBot + $rootScope._auth_user_id,
                data: data
            });
  }

  this.getInitBot = function() {
     return $http({
                method: 'GET',
                url: Strings.apis.getInitBot + $rootScope._auth_user_id
            });
  }

  this.initBotDb = function() {
    return $http({
                method: 'POST',
                url: Strings.apis.initBotDB + $rootScope._auth_user_id
            });
  }




}])