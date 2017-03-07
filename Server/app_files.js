var AppFiles = function() {

    this.libs = {
    	js: [
              'ui/node_modules/angular/angular.min.js',
              'ui/node_modules/angular-animate/angular-animate.min.js',
              'ui/libs/socket.io/socket.io.min.js'
    	    ],
    	css:[
    	    ]    
    };

    this.custom = {
    	js: [
              'ui/*.js',
              'ui/app/directives/*.js', 
              'ui/app/services/*.js'
    	    ],
    	css:[
    	      'ui/style/style.css'
    	    ]    
    };

    this.server = 
         [
           'application/socket/*.*',
           'application/db/*.*',
           'application/services/*.*',
           'application/*'

         ];
    


}


module.exports = AppFiles;