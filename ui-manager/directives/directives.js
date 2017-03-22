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



app.directive('toggleOnScroll', ['$compile', function($compile){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		 // controller: function($scope, $element, $attrs, $transclude) {

		 // },
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {			

			var options = JSON.parse(iAttrs.toggleOnScroll);
		 	$scope.target = iElm.find(options.elm);
		 	console.log($scope.target)
		 	$scope.marginD = $scope.target["0"].style.marginTop;			
			

			if(iElm[0].scrollTop <= options.top) {
                    $scope.target.css("opacity", "0");
                    $scope.target.css("margin-top", "-"+options.top)
				}

			iElm[0].onscroll = function() {
				if(iElm[0].scrollTop > options.top) {
                    $scope.target.css("opacity", "1");
                    $scope.target.css("margin-top", $scope.marginD)
				} else {
                    $scope.target.css("opacity", "0");
                    $scope.target.css("margin-top", "-"+options.top)
				}
			}
			
		}
	};
}]);


app.directive('loader', ['$compile', function($compile){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		 templateUrl: 'directives/templates/loader.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

            if(iAttrs.lTitle != undefined && iAttrs.lTitle != null && iAttrs.lTitle != '') $scope.title = iAttrs.lTitle;

			console.log(iElm)
			iElm.css('top', iElm[0].parentElement.offsetTop);
			iElm.css('width', iElm["0"].parentElement.offsetWidth);
			iElm.css('position', 'absolute');
			iElm.css('height', '100%');
			iElm.css('height', iElm["0"].parentElement.offsetHeight);

			// if(iElm[0].parentElement != null) {
			// 	iElm.css('top', iElm[0].parentElement.offsetTop);
			// 	iElm.css('width', iElm["0"].parentElement.offsetWidth);
			// 	iElm.css('left', iElm["0"].parentElement.offsetLeft);
			// 	iElm.css('position', 'fixed');
			// 	iElm.css('height', iElm["0"].parentElement.offsetHeight);
			// }

			
		}
	};
}]);