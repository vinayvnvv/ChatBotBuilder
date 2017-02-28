var AppFiles = function() {

    this.libs = {
    	js: [
              'ui/node_modules/angular/angular.min.js',
              'ui/libs/socket.io/socket.io.min.js'
    	    ],
    	css:[
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