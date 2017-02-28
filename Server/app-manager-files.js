var AppFiles = function() {

    this.libs = {
    	js: [
              'ui/node_modules/angular/angular.min.js',
              'ui/node_modules/angular-ui-router/realease/angular-ui-router.min.js',
              'ui/node_modules/angular-animate/angular-animate.min.js',
              'ui/node_modules/angular-material/angular-material.min.js',
              'ui/node_modules/angular-aria/angular-aria.min.js',
              'ui/node_modules/angular-messages/angular-messages.min.js',
              'ui/libs/socket.io/socket.io.min.js',
    	    ],
    	css:[
    	      'ui/node_modules/angular-material/angular-material.min.css'
    	    ]    
    }

    this.custom = {
    	js: [
              'ui/*.js',
              'ui/app/directives/*.js', 
              'ui/app/services/*.js'
    	    ],
    	css:[
    	      'ui/style/style.css'
    	    ]    
    }


}


module.exports = AppFiles;