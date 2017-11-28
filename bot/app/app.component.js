alight.component('bot-flow-root', function (scope, element, env) {
	    return { 
	    	templateUrl: "app/app.component.html",
	    	onStart: function() {
	    		 	console.log(scope)
				    scope.name = "vinay";
				    scope.click = function() {
				    	scope.name = "Shannubhag"
				    }
	    	}
	    };
});