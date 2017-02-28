var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors());
var http = require('http').Server(app);
var io = require('socket.io')(http);
var gulp_task = require('./Server/task');
var Server = new gulp_task(app, http);
var path = require('path');
var port = 3000;



// app.set('views', path.join(__dirname, 'ui'));
// // app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'ui')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


var test = io
           .of('/test')
            .on('connection', function(socket){
              socket.on('newmsg', function(msg){
                console.log('message: ' + msg);
                setTimeout(function() { test.emit('resmsg', msg) }, 2000);
                
                
              });

              socket.on('typing', function(msg){
                setTimeout(function() { test.emit('typing', msg) }, 10);
                
                
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




