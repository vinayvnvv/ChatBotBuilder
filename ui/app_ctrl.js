console.log("hello")


app.controller('mainCtrl', ['$scope', function($scope){

	console.log("called main ctrl");


     $scope.msgs = [];

     var test = io.connect('http://127.0.0.1:3000/test');

     test.on('resmsg', function(data) {
     	console.log(data)
     	if($scope.name != data.name )
     	$scope.msgs.push(data);
     	$scope.$apply();
     })

     test.on('typing', function(data) {
     	if(data.name != $scope.name) { 
     		$scope.typing = true;
     		$scope.typing_name = data.name;
     		$scope.$apply();
     	}
     	setTimeout(function() { $scope.typing = false; $scope.$apply();}, 500);
     })


     var id = Math.random();


      var chat = io.connect('http://127.0.0.1:3000/chat');
		
		 chat.on('connect', function() {
		 	    chat.emit('id', id);

		 	    chat.on('entry', function(data) {
                      if(data!=id) console.log(data + " is connected!!!");
		 	    } );
		 	    chat.on('auth', function(data) {
		 	    	console.log(data)
		 	    })



		 })



  $scope.checkInput = function(e) {
  	 
     if(e.keyCode == 13) {
     	var m = {name:$scope.name,msg:$scope.query};
     	$scope.msgs.push(m);
     	test.emit('newmsg', m);
     	$scope.query = '';
     } else {
     	test.emit('typing', {name:$scope.name});
     }

  }

}])