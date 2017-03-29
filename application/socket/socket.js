
var Sockets = function(http) {
var io = require('socket.io')(http);
var DB = new (require('./../db/main'))  ();
var DBHelper = new (require('./../db/Helper')) ();
var Strings = require('./../string');

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
                                //socket.emit('modules_res', {module:{msg:["Resuming Session"]}})

                              } else {  //start from new instance
                                console.log("no tracking")
                                //return all msgs

                                DBHelper.getInitModule(  //send welcome msg
                                      data.c_id,
                                      function(module) { 
                                        DBHelper.insertTrack(  //send after updating track 

                                           data.uuid, data.c_id,
                                           function(res) { 
                                            if(module != null)
                                              socket.emit('modules_res', DBHelper.generateModuleForWeb(module)); 
                                            else
                                              socket.emit('modules_res', {module:{msg:["Welcome"]}});
                                             },
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

                    //check for exit msg
                    if(data.query == (Strings.exit.Reqmsg).toLowerCase()) {
                        console.log("exit from current tracking")
                          DBHelper.resetTrack(
                                data.uuid,
                                function() { 
                                            setTimeout(function() { socket.emit('modules_res', DBHelper.generateModuleForWeb({msg:Strings.exit.Resmsg})); }, 1000); 
                                          },
                                function() {}
                             );
                          return;
                     }

                     
                    DBHelper.saveQuery(data.uuid, {by:"me", msg:data.query});
	              		
                    DBHelper.trackStatus(

                        data.uuid,
                        function(flag, doc) {
                           console.log("tracked doc:" + doc)
                           if(doc.current_module == 'init') {  //init bot send
                            DB.matchMenu(
                              data.c_id,data.uuid,data.query,
                              function(menu_module) { 

                                  if(menu_module!=false) { //menu is matched
                                    setTimeout(function() { socket.emit('modules_res',  DBHelper.generateModuleForWeb(menu_module));  }, 1700);
                                     
                                  } else {    //search in modules for flow
                                        DB.matchModule(
                                          data.c_id,data.uuid,data.query, 
                                          function(module) { 
                                            if(module!=false) {
                                              //save query
                                              DBHelper.saveQuery(data.uuid, DBHelper.generateModuleForWeb(module).module);
                                              setTimeout(function() { 
                                                  socket.emit('modules_res', DBHelper.generateModuleForWeb(module)); 
                                                  DBHelper.sendAutoFirstModule(data.uuid, socket, DB);
                                                   }, 1200);
                                                  
                                                            
                                                }
                                          },
                                          function() {}
                                      );
                                  }


                                },
                              function(err) {}
                              );
                              
                           } else { // send modules from track info
                              DB.getModule(
                                  doc,
                                  data.query,
                                  function(module) { 
                                    //save query
                                    DBHelper.saveQuery(data.uuid, DBHelper.generateModuleForWeb(module).module);
                                    console.log("sending welocome msg...")
                                    console.log(module)
                                    setTimeout(function() { socket.emit('modules_res', DBHelper.generateModuleForWeb(module));  }, 1200); 
                                  },
                                  function() {}
 
                                );

                           }


                        },
                        function(err) {}

                      );
	              		
	              	});



	              });            
	          }

     }

module.exports = Sockets;          