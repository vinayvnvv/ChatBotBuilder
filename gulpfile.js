var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var gulp_task = require('./gulp/task');
var Server = new gulp_task(app, http);
var port = 3000;


// app.set('views', path.join(__dirname, 'ui'));
// // app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'ui')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  socket.on('newmsg', function(msg){
    console.log('message: ' + msg);
    setTimeout(function() { io.emit('resmsg', msg) }, 2000);
    
    
  });

  socket.on('typing', function(msg){
    setTimeout(function() { io.emit('typing', msg) }, 10);
    
    
  });
});

var chat = io
              .of('/chat')
              .on('connection', function(socket) {


              	socket.on('id', function(data) {
                    console.log(data + " id is authorized!!!")
                    chat.emit('entry', data);
                    socket.emit('auth', "welcome " + data)
              	})



              });


Server.start(port);



