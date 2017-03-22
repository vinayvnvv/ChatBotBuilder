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


	this.selected = {
		moduleIndex : "selected_module_index"
	}

	this.validationTypeArray = [
		                         {title:"Number", value:"number"},
		                         {title:"Email", value:"email"}
		                       ];
	
	this.suggestionTypeArray = [
		                         {title:"List", value:"list"},
		                         {title:"Option", value:"option"}
		                       ];


}]);





