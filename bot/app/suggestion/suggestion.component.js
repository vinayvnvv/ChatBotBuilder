alight.component('c-bot-sug', function (scope, element, env) {
	    return { 
	    	templateUrl: "app/suggestion/suggestion.component.html",
	    	onStart: function() {
	    			scope.data = scope.data;
	    			scope.change = scope.change;

	    			scope.onSelect = function(item) {
	    				env.parentChangeDetector.scope.onSuggestionSelect(item);
	    			}
	    	}
	    };
});