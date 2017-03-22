angular.module('autoAddInput', [])

 .directive('autoAddInput', ['$compile', function($compile){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			data : "=ngModel"
		}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude) {

			console.log($scope.data)
			if($scope.data==undefined) $scope.data = [];

			$scope.$initialized = false;
			$scope.data_dup = $scope.data;
			$scope.data_dup_at_remove = [];
			for(var i=0;i<$scope.data.length;i++) $scope.data_dup_at_remove.push(false);
			$scope.removeTemplate = `<span class='auto_input_remove' style="background:#cc0000;color:#fff;font-size:11px;position:relative;border-radius:50px;padding: 2px 4px;left:-22px;cursor:pointer" ng-if>X</span>`;
           $scope.appendEle = function(template) {

				 var el = $compile(template)( $scope );
                 $element.parent().append(el);

			}

			$scope.templateAt = function(i) {

			   var e_tem = $scope.removeTemplate.replace("ng-if","ng-if='data_dup[" + i + "] != null' ng-click='data_dup[" + i + "] = null' ng-hide='data_dup_at_remove[" + i + "]'");
               return "<div ng-if=\"data_dup[" + i + "] != null\">" + $scope.template.replace(/data-array\=['"]\$index['"]/,"ng-model='data_dup[" + i + "]' ng-if='data_dup[" + i + "] != null'") + e_tem + "</div>"	;
			}

			$scope.init = function() {
				var template;
				for(var i=0;i<$scope.data_dup.length;i++) {
					template = $scope.templateAt(i);
					$scope.appendEle(template);
				}

				
			}

		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

			$scope.template = String.prototype.valueOf.call(iElm[0].innerHTML);
			iElm[0].innerHTML = "";

            //$scope.appendEle(template)
			//iElm[0].innerHTML = template;



			

            
			
			console.log("called auto")
			console.log($scope.data_dup[$scope.data_dup+1])
			console.log($scope.template)


			$scope.init();

			 $scope.$watch('data_dup', function(newValue, oldValue) {
			 	            if($scope.data_dup.length == 0) {
			 	            	$scope.appendEle($scope.templateAt(0, true));
			 	            	$scope.data_dup[0] = "";
			 	            	$scope.data_dup_at_remove[0] = true;
			 	            	return;
			 	            }
                          	if($scope.data_dup[$scope.data_dup.length-1].length>0) {
                          			$scope.appendEle($scope.templateAt($scope.data_dup.length, true));
                          			$scope.data_dup[$scope.data_dup.length] = '';
                          			$scope.data_dup_at_remove.push(true);
                          			console.log($scope.data_dup_at_remove);
                          			$scope.data_dup_at_remove[$scope.data_dup_at_remove.length-2] = false;
                          			console.log($scope.data_dup_at_remove);
                          			
                          	}
                          
                          $scope.data = $scope.data_dup.filter(function(d) { return (d!='' && d!=null) ;});
                          

                          }, true);
		}
	};
}]);