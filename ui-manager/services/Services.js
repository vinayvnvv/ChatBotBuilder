app.service('Service', ['$rootScope', function($rootScope){
	
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
       console.log(data, index, item);
       data.splice(index, 0, item);
       return data;  
	}


	
}])