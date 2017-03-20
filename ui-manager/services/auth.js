

app.service('Auth', ['$rootScope', 'Strings', function ($rootScope, Strings) {

    this.isAuth = function() {
        if( (localStorage.getItem(authInstance.storageName) == "null") || (localStorage.getItem(authInstance.storageName) == null) || (localStorage.getItem(authInstance.storageName) == undefined))
        	return false;
        return true;
    }

    this.getAuth = function() {
    	return JSON.parse(localStorage.getItem(authInstance.storageName));
    }


    this.initAuth = function() {
      var data = JSON.parse(localStorage.getItem(authInstance.storageName));
      if(data == null) return;
      
      $rootScope._auth_user_id = data[authInstance.storageIdKey];
      $rootScope._auth_user_name = data[authInstance.storageNameKey];
      $rootScope._auth_user_email = data[authInstance.storageEmailKey];
      $rootScope._auth_user_avtar = data[authInstance.storageAvtarKey];
      $rootScope.$apply();
    }


    this.setAuth = function(data) {
      localStorage.setItem(authInstance.storageName, JSON.stringify(data));
    }


}]);

  

 function signOut() {
  gapi.load('auth2', function() {
        gapi.auth2.init();
      });
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      localStorage.setItem(authInstance.storageName, null)
      window.location = "#!/login"
    });
  }

 function onFailure () {
 	console.log("errrr")
 }


function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': '400',
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSignIn,
    'onfailure': onFailure
  });
}  