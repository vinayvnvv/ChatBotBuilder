// app.directive('templateUrl', ['$compile', '$http', function($compile, $http){
// 	// Runs during compile
// 	return {
// 		// name: '',
// 		 priority: 1,
// 		// terminal: true,
// 		scope: true, // {} = isolate, true = child, false/undefined = no change
// 		//controller: function($scope, $element, $attrs, $transclude) {},
// 		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
// 		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
// 		 //template: '<template url="{{__template_uel__}}"></template>',
// 		// templateUrl: '',
// 		// replace: true,
// 		// transclude: true,
// 		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
// 		link: function($scope, iElm, iAttrs, controller) {

// 			console.log('template attaching..')
// 		     	$http.get(iAttrs.templateUrl)
// 					.then(function(res) {
// 						console.log('template attach success')
// 						var compileTemp = $compile(res.data)($scope);
// 						iElm[0].innerHTML = '';
// 						iElm.append(compileTemp);
// 					}, function(res) {
// 						console.log('template attach error');
// 					});
// 		}
// 	};
// }]);

app.directive('myTemplate', ['$compile', '$http', function($compile, $http){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
         scope: true,
   //          url: '@'
		 // }, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

			$scope.$watch('$parent', function() {
				console.log("called changes")
			})

			if($scope.____url != iAttrs.url) {
				$scope.____url = iAttrs.url;

				$http.get(iAttrs.url)
					.then(function(res) {
						console.log('template attach success')
						var compileTemp = $compile(res.data)($scope);
						iElm[0].innerHTML = '';
						iElm.append(compileTemp);
					}, function(res) {
						console.log('template attach error');
					});

			}


			setTimeout(function() { console.log(iAttrs.url); }, 3000);

			
		}
	};
}]);


