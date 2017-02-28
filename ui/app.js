/**
* ChatBot Module
*
* Description
*/
var app = angular.module('ChatBot', []);

app.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'http://127.0.0.1:3000/**']);
 })


