

app.service('Auth', ['$rootScope', 'Strings', function ($rootScope, Strings) {

    this.isAuth = function() {
    	console.log('strorage', 	localStorage.getItem(authInstance.storageName))
        if( (localStorage.getItem(authInstance.storageName) == "null") || (localStorage.getItem(authInstance.storageName) == null) || (localStorage.getItem(authInstance.storageName) == undefined))
        	return false;
        return true;
    }

    this.getAuth = function() {
    	return JSON.parse(localStorage.getItem(authInstance.storageName));
    }


}]);





function onSignIn(googleUser) {

  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); 

  var data = {};
  data[authInstance.storageIdKey] = profile.getId();
  data[authInstance.storageNameKey] = profile.getName();
  data[authInstance.storageAvtarKey] = profile.getImageUrl();
  data[authInstance.storageEmailKey] = profile.getEmail();


  console.log(data)

  localStorage.setItem(authInstance.storageName, JSON.stringify(data));

  

}

 function signOut() {
 	console.log(gapi)
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      localStorage.setItem(authInstance.storageName, null)
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