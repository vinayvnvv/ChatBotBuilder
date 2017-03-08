
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
                       DBHelper.trackStatus(

                             data.uuid,
                             function(flag, doc) { 
                              if(flag) { // continue from tracking
                                console.log("continue from tracking")
                                //return all msgs
                                //send next module[index]
                                socket.emit('modules_res', {module:{msg:["Resuming Session"]}})

                              } else {  //start from new instance
                                console.log("no tracking")
                                //return all msgs

                                DBHelper.getInitModule(  //send welcome msg
                                      data.c_id,
                                      function(module) { 
                                        DBHelper.insertTrack(  //send after updating track 

                                           data.uuid, data.c_id,
                                           function(res) { socket.emit('modules_res', DBHelper.generateModuleForWeb(module));  },
                                           function(err) {}

                                          );

                                      },
                                      function(err) {}
                                )  


                              }
                             
                            },
                             function(err) {}

                         );
                      socket.emit('entry', data);
                  })




	              	socket.on('modules_req', function(data) {
	              		
                    DBHelper.trackStatus(

                        data.uuid,
                        function(flag, doc) {

                           if(doc.current_module == 'init') {  //init bot send
                              DB.matchModule(
                                    data.c_id,data.uuid,data.query, 
                                    function(module) { 
                                      if(module!=false) {
                                        setTimeout(function() { socket.emit('modules_res', DBHelper.generateModuleForWeb(module));  }, 1200);
                                        
                                      }
                                    },
                                    function() {}
                                )
                           } else { // send modules from track info
                              DB.getModule(
                                  doc,
                                  data.query,
                                  function(module) { 
                                    console.log("sending welocome msg...")
                                    console.log(module)
                                    setTimeout(function() { socket.emit('modules_res', DBHelper.generateModuleForWeb(module));  }, 1200); 
                                  },
                                  function() {}
 
                                )

                           }


                        },
                        function(err) {}

                      );
	              		
	              	});



	              });            
	          }

     }

module.exports = Sockets;          