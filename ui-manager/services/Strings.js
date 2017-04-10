app.service('Strings',['$location', function($location) {

	console.log("called string service");

	var origin = $location.$$protocol + "://" + $location.$$host + ":" + $location.$$port + "/";
	
	this.apis = {
		getModules : origin + "api/manager/modules/",
		updateModules: origin + "api/manager/modules/update/",
		createModules: origin + "api/manager/modules/create/",
		updateInitBot : origin + "api/manager/modules/init/",
		getInitBot : origin + "api/manager/modules/init/",
		initBotDB : origin + "api/manager/modules/init_db/"
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

    this.themeNames = [
                         {title:"red", value:"red"},
                         {title:"pink", value:"pink"},
                         {title:"purple", value:"purple"},
                         {title:"deep-purple", value:"deep-purple"},
                         {title:"indigo", value:"indigo"},
                         {title:"blue", value:"blue"},
                         {title:"light-blue", value:"light-blue"},
                         {title:"cyan", value:"cyan"},
                         {title:"teal", value:"teal"},
                         {title:"green", value:"green"},
                         {title:"light-green", value:"light-green"},
                         {title:"lime", value:"lime"},
                         {title:"yellow", value:"yellow"},
                         {title:"amber", value:"amber"},
                         {title:"orange", value:"orange"},
                         {title:"deep-orange", value:"deep-orange"},
                         {title:"brown", value:"brown"},
                         {title:"grey", value:"grey"},
                         {title:"blue-grey", value:"blue-grey"},

                      ];                 

    this.theme = {
    	name: "appThemeName"
    }                 

}]);





