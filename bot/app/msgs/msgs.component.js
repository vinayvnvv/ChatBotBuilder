alight.component('c-bot-mgs', function (scope, element, env) {
	    return { 
	    	templateUrl: "app/msgs/msgs.component.html",
	    	onStart: function() {
	    			scope.index = scope.index;
				    scope.name = scope.in;
				    scope.click = function() {
				    	scope.name = "Shannubhag"
				    }
	    	}
	    };
});