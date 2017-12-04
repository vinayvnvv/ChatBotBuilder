var AppManagerFiles = function() {

    this.libs = {
    	js: [
              'node_modules/angular/angular.min.js',
              'node_modules/angular-ui-router/release/angular-ui-router.min.js',
              'node_modules/angular-animate/angular-animate.min.js',
              'node_modules/angular-material/angular-material.min.js',
              'node_modules/angular-aria/angular-aria.min.js',
              'node_modules/angular-messages/angular-messages.min.js',
              'node_modules/angular-moment/angular-moment.min.js',
              'node_modules/moment/moment.js',
              'ui-manager/libs/auto-add-input.js'
    	    ],
    	css:[
    	      'node_modules/angular-material/angular-material.min.css'
    	    ]    
    }

    this.custom = {
    	js: [
              'ui-manager/*.js',
              'ui-manager/app/dashboard/ctrl/*.js', 
              'ui-manager/app/auth/ctrl/*.js', 
              'ui-manager/app/setting/*.js', 
              'ui-manager/directives/*.js',
              'ui-manager/services/*.js'
    	    ],
    	css:[
    	      'ui-manager/style/*.css'
    	    ]    
    }


     this.server = 
         [
           'app-manager/*.*',
           'app-manager/db/*.*',
           'app-manager/route/*.*',
           'app-manager/models/*.*',
           'app-manager/services/*.*'

         ];


}


module.exports = AppManagerFiles;