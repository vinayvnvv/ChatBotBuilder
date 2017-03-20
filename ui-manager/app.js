var app = angular.module('ChatBotManager', ['ui.router', 'ngAnimate', 'ngMaterial']);

app.run(['Auth', '$rootScope', '$state', '$location', function (Auth, $rootScope, $state, $location) {

   
     Auth.initAuth();

         $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
          console.log(toState)
           if(toState.name != 'login') {
                  if ( !(Auth.isAuth())   ) {
                    event.preventDefault();
                    window.location = "#!/login";
                    return false;
                }

            } else {
              console.log("not login")
            }
        })
 
   
}])

//Routing
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    //default Router
    $urlRouterProvider.otherwise("/dashboard");

	//Define router config
    $stateProvider
       .state("login", {
       	  url: "/login",
       	  templateUrl: "app/auth/html/login.html",
       	  controller: "loginCtrl"
       })

    $stateProvider
       .state("dashboard", {
       	  url: "/dashboard",
       	  templateUrl: "app/dashboard/html/dashboard.html",
       	  controller: "dashboardCtrl"
       })  

    $stateProvider
       .state("track", {
          url: "/track",
          templateUrl: "app/manager/html/track.html",
          controller: "trackCtrl"
       })    





 }]);

//theme config
app.config(['$mdThemingProvider',function($mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('light-green')
    .accentPalette('light-green');
}]);