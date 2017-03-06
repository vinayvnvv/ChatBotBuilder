
var Sockets = function(http) {
var io = require('socket.io')(http);
var DB = new (require('./../db/main'))  ();
var DBHelper = new (require('./../db/Helper')) ();


var msg = {
  "type":"single|flow",
  "module": [
    {
       "id":"aa123213", 
       "msg":"hello",
       "beforeMsg":[],
       "afterMsg":[],
       "shortcut":"list|option|yes-no",
       "shortcutData":["hello","bye"],
       "customStyleTemplate":"true",
       "template":"<h1>{{msg[1]}}</h1>",
       "validate":"date",
       "validateErrMsg":"it must be date"
  },
  {
       "id":"aa123213",
       "msg":"hello , where is {{}}",
       "beforeMsg":[],
       "afterMsg":[],
       "shortcut":"list|option|yes-no",
       "customStyleTemplate":"true",
       "template":"<h1>{{$flow[0]}}</h1"
  }
  ]
};


this.listen = function () {
	console.log("listening sockets...")
	var bot = io
	              .of('/sockets/bot')
	              .on('connection', function(socket) {


	              	

                  socket.on('init', function(data) {
                    //DBHelper.updateTrack('uuid', DBHelper.constructTrackModel({flow_id: "m_id_21312"}));
                    console.log(data)
                       DBHelper.isTrack(

                             data.uuid,
                             function(flag) { 
                              if(flag) { // continue from tracking
                                console.log("continue from tracking")
                                  



                              } else {  //start from new instance
                                console.log("no tracking")

                              }
                             
                            },
                             function(err) {}

                         );
                      socket.emit('entry', data);
                  })




	              	socket.on('modules_req', function(data) {
	              		console.log("req for modules")
	              		DB.getData(
	              			data.id, 
	              			function(data){
                                 setTimeout(function() { socket.emit('modules_res', data); }, 1000); 
	              			}
	              			);
	              		
	              	});



	              });            
	          }

     }

module.exports = Sockets;          