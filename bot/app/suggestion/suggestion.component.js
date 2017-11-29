alight.component('c-bot-sug', function (scope, element, env) {
	    return { 
	    	templateUrl: "app/suggestion/suggestion.component.html",
	    	onStart: function() {
	    			scope.data = scope.data;
				    scope.click = function() {
				    	scope.name = "Shannubhag"
				    }
	    	}
	    };
});