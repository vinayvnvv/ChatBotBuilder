app.service('Strings',['$location', function($location) {

	console.log("called string service");

	var origin = $location.$$protocol + "://" + $location.$$host + ":" + $location.$$port + "/";
	
	this.apis = {
		getModules : origin + "api/manager/modules/",
		updateModules: origin + "api/manager/modules/update/",
		createModules: origin + "api/manager/modules/create/",
	}

	this.templateUrl = {
		statsView : 'app/dashboard/html/stats-view.html',
		moduleView : 'app/dashboard/html/module-view.html'
	}
	
}]);





