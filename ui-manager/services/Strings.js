app.service('Strings',['$location', function($location) {

	console.log("called string service");

	var origin = $location.$$protocol + "://" + $location.$$host + ":" + $location.$$port + "/";
	
	this.apis = {
		getModules : origin + "api/manager/modules/",
		updateModules: origin + "api/manager/modules/update/",
		createModules: origin + "api/manager/modules/create/"
	}

	this.templateUrl = {
		statsView : 'app/dashboard/html/stats-view.html',
		moduleView : 'app/dashboard/html/module-view.html',
		flowView : 'app/dashboard/html/flow-bar.html',
		menuView : 'app/dashboard/html/menu-bar.html'
	}


	this.selected = {
		moduleIndex : "selected_module_index",
		module: "moduleSelectedData",
		moduleIndexSelectedLoader: "moduleIndexSelectedLoader",
		openModuleItemDialogType:"openModuleItemDialogType"
	}

	this.validationTypeArray = [
	                             {title:"None", value:"none"},
		                         {title:"Number", value:"number"},
		                         {title:"Email", value:"email"}
		                       ];
	
	this.suggestionTypeArray = [
	                             {title:"None", value:"none"},
		                         {title:"List", value:"list"},
		                         {title:"Option", value:"option"}
		                       ];

    this.menuTypes = [ 
                         {title:"List", value:"list"},
                         {title:"Option", value:"option"}
                     ];

}]);





