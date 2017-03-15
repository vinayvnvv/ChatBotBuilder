var app = angular.module('ChatBotManager', ['ui.router', 'ngAnimate', 'ngMaterial']);

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