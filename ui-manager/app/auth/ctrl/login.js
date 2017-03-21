app.controller('loginCtrl', ['$scope', '$rootScope', '$state', 'Auth', function($scope, $rootScope, $state, Auth){
	console.log("called Login Ctrl");


 (function() {

      var p =   document.createElement('script');
          p.type = 'text/javascript';
          p.async = true;
          p.src = "https://apis.google.com/js/platform.js?onload=renderButton";
          document.body.insertBefore(p, document.body.childNodes[0]);

  })();


  $scope.onSignIn = function() {
    var params = {
       'client_id' : '617965711227-ak9h08uuhefcbn6v5ccq8io3bdh401ml.apps.googleusercontent.com',
       'cookie_policy' : 'single_host_origin',
       'ux_mode' : 'popup',
       'callback' : function(data) {
         console.log(data)
       }

    }

    gapi.auth2.init().signIn(params).then(function(res) {
          var profile = res.getBasicProfile();

            var data = {};
            data[authInstance.storageIdKey] = profile.getId();
            data[authInstance.storageNameKey] = profile.getName();
            data[authInstance.storageAvtarKey] = profile.getImageUrl();
            data[authInstance.storageEmailKey] = profile.getEmail();

            console.log('logged Id: ' +  profile.getId())

            Auth.setAuth(data);
            Auth.initAuth();
            $state.go("dashboard");

           
    })
  }
	




}])