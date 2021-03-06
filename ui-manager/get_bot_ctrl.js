app.controller('myBotCtrl', ['$scope', "$rootScope", '$mdDialog', 'Strings', 'Models', 'Api', 'Service', function($scope, $rootScope, $mdDialog, Strings, Models, Api, Service){
	console.log("myBotctrl", $rootScope._auth_user_id);
	$scope._auth_user_id = $rootScope._auth_user_id;
	$scope.i_b_input = {};
  $scope.init_bot = {};

	var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
    $scope.err = {};
    $scope.suggestion_type_array = Strings.suggestionTypeArray;

	// Encode the String
	$scope._auth_user_id = Base64.encode($rootScope._auth_user_id);

	// Decode the String
	// var decodedString = Base64.decode($scope._auth_user_id);
	// console.log(decodedString); // Outputs: "Hello World!"

    
    $scope.closeDialog = function() {
      $mdDialog.cancel();
  }

    $scope.getInitBot = function() {

    	Service.loader.showRoot('Getting Initializers!');	

    	Api.getInitBot()
               .then(function(res){
                   Service.loader.hideRoot();
                   console.log(res.data)

                   //bind data
                   if(res.data.length != 0) {
                     $scope.i_b_input = res.data[0];
                     $scope.i_b_input.style.height = parseInt($scope.i_b_input.style.height);
                     $scope.i_b_input.style.width = parseInt($scope.i_b_input.style.width);
                   } else {
                   	 $scope.i_b_input.shortcut = 'none';
                   }
               	} ,
               	function(err) {
                  Service.loader.hideRoot();
                  Service.Toast(" Error in Bot set-up!");
               	});

    }

    $scope.setUpBot = function() {
    	$scope.err.show = true;
    	if($scope.validateInitInput()) {

        console.log($scope.i_b_input)

    		Service.loader.showRoot('Setting Up Bot....');	
            Api.updateInitBot(Models.initBot($scope.i_b_input))
               .then(function(res){
                   Service.loader.hideRoot();
                   Service.Toast(" Bot set-up Completed!");
                   $scope.showSetup = false;
               	} ,
               	function(err) {
                  Service.loader.hideRoot();
                  Service.Toast(" Error in Bot set-up!");
               	});
    		
    	}
    }


    $scope.validateInitInput = function() {
      
      if(
      	   $scope.i_b_input.msg.length == 0 ||
      	   ( $scope.i_b_input.shortcut != 'none' && $scope.i_b_input.shortcutData.length == 0 ) ||
           $scope.init_bot.i_bg_color.$invalid ||
           $scope.init_bot.i_color.$invalid ||
           $scope.init_bot.i_height.$invalid ||
           $scope.init_bot.i_width.$invalid 

      	) return false;

       return true;
    }



    //call

    $scope.getInitBot();

}])