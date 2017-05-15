app.controller('loginCtrl', ['$scope', '$rootScope', '$state', 'Auth', 'Api', 'Service', function($scope, $rootScope, $state, Auth, Api, Service){
	console.log("called Login Ctrl");


 (function() {

      var p =   document.createElement('script');
          p.type = 'text/javascript';
          p.async = true;
          p.src = "https://apis.google.com/js/platform.js?onload=renderButton";
          document.body.insertBefore(p, document.body.childNodes[0]);

  })();


  $scope.onSignIn = function() {
    Service.loader.showRoot('Authendicating!'); 
    var params = {
       'client_id' : '617965711227-ak9h08uuhefcbn6v5ccq8io3bdh401ml.apps.googleusercontent.com',
       'cookie_policy' : 'single_host_origin',
       'ux_mode' : 'popup',
       'callback' : function(data) {
         console.log(data);
       }

    }

    gapi.auth2.init().signIn(params).then(function(res) {
          Service.loader.hideRoot();
          Service.loader.showRoot('Initializing!'); 
          var profile = res.getBasicProfile();

            var data = {};
            data[authInstance.storageIdKey] = profile.getId();
            data[authInstance.storageNameKey] = profile.getName();
            data[authInstance.storageAvtarKey] = profile.getImageUrl();
            data[authInstance.storageEmailKey] = profile.getEmail();

            console.log('logged Id: ' +  profile.getId())

            Auth.setAuth(data);
            Auth.initAuth();
            Api.initBotDb().then(function(res){
              console.log("initDb response", res);
              Service.loader.hideRoot();
              $state.go("dashboard");
            },function(err) {
              Service.loader.hideRoot();
              Service.Toast("There was error in initializing! Please refresh the page and login again!");
            })
            //$state.go("dashboard");

           
    })
  }
	




}])