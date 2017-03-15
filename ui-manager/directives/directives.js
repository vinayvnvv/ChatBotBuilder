app.directive('ripple', ['$mdInkRipple', function($mdInkRipple){
	// Runs during compile
	return {
		link: function($scope, iElm, iAttrs, controller) {
			iElm.css({"position":"relative"})
			iElm.bind('click', function(e) {
               
			     return $mdInkRipple.attach($scope, iElm, angular.extend({
			        center: false,
			        dimBackground: true
			      }, iAttrs.ripple));


			})
		}
	};
}]);