app.service('Service', ['$rootScope', '$mdToast', function($rootScope, $mdToast){
	
	this.loader = {
		showRoot: function(title) {
			            if(title == undefined || title == null) title = "Loading";
						$rootScope.rootLoaderTitle = title;
						$rootScope.rootLoader = true;
					},
	    hideRoot: function() {
                        $rootScope.rootLoader = false;
	    			},	
	    showLeftBar: function(title) {
			            if(title == undefined || title == null) title = "Loading";
						$rootScope.leftBarLoaderTitle = title;
						$rootScope.leftBarLoader = true;
					},
	    hideLeftBar: function() {
                        $rootScope.leftBarLoader = false;
	    			}							
	}


	this.addModuleAt = function(index, data, item) {
	   if(data == undefined) data = [];
       console.log(data, index, item);
       data.splice(index, 0, item);
       return data;  
	}

	this.Toast = function(text, position, delay) {
		if(text == undefined) return;
		if(position == undefined) position = "bottom right";
		if(delay == undefined) delay = 3000; 
		 $mdToast.show(
		      $mdToast.simple()
		        .textContent(text)
		        .position(position)
		        .hideDelay(3000)
		    );
	}


	
}])