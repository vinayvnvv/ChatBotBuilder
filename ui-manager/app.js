var app = angular.module('ChatBotManager', ['ui.router', 'ngAnimate', 'ngMaterial']);

app.run(['Auth', '$rootScope', '$state', '$location', function (Auth, $rootScope, $state, $location) {


  
  console.log($state)



 
         $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
          console.log("isAuth:", Auth.isAuth())
            console.log("toState" , toState)
           if(toState.name != 'login') {
                  if ( !(Auth.isAuth())   ) {
                    event.preventDefault();
                    window.location = "#!/login";
                    return false;
                }

            }
          console.log(toState)
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