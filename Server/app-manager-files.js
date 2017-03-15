var AppManagerFiles = function() {

    this.libs = {
    	js: [
              'ui-manager/node_modules/angular/angular.min.js',
              'ui-manager/node_modules/angular-ui-router/release/angular-ui-router.min.js',
              'ui-manager/node_modules/angular-animate/angular-animate.min.js',
              'ui-manager/node_modules/angular-material/angular-material.min.js',
              'ui-manager/node_modules/angular-aria/angular-aria.min.js',
              'ui-manager/node_modules/angular-messages/angular-messages.min.js'
    	    ],
    	css:[
    	      'ui-manager/node_modules/angular-material/angular-material.min.css'
    	    ]    
    }

    this.custom = {
    	js: [
              'ui-manager/*.js',
              'ui-manager/app/dashboard/ctrl/*.js', 
              'ui-manager/app/auth/ctrl/*.js',
              'ui-manager/directives/*.js'
    	    ],
    	css:[
    	      'ui-manager/style/style.css'
    	    ]    
    }


}


module.exports = AppManagerFiles;