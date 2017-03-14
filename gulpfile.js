var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors());
var http = require('http').Server(app);
var gulp_task = require('./Server/task');
var Server = new gulp_task(app, http);
var path = require('path');
var Sockets = new (require('./application/socket/socket')) (http);
var port = 3001;



// app.set('views', path.join(__dirname, 'ui'));
// // app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'ui')));
app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', function(req, res) {
	setTimeout(function() { res.send("hello"); }, 3000);
})


Server.start(port);
Sockets.listen();



