var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
app.use(cors());
var http = require('http').Server(app);
var gulp_task = require('./Server/task');
var Server = new gulp_task(app, http);
var path = require('path');
var Sockets = new (require('./application/socket/socket')) (http);
var managerApi = require('./app-manager/routes');
var adminApi = require('./admin-app/routes');
var botApi = require('./application/routes');
var port = (process.env.PORT || 3000);



// app.set('views', path.join(__dirname, 'ui'));
// // app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, '/dist')));
//app.use(express.static(path.join(__dirname, '/ui-manager')));
//app.use(express.static(path.join(__dirname, '/ui')));
app.use(express.static(path.join(__dirname, '/')));


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/test', function(req, res) {
	setTimeout(function() { res.send("hello"); }, 3000);
})

app.get('/bot', function(req, res) {
	 res.sendFile(__dirname + '/bot/index.html');
})

app.use('/api/manager', managerApi);
app.use('/api/admin', adminApi);
app.use('/api/bot', botApi);
app.get('/ui-manager', function(req, res) {
  res.sendFile(__dirname + '/ui-manager/index.html');
});
app.get('/admin', function(req, res, next) {
  res.sendFile(__dirname + '/dist/admin/admin-app/index.html');
});
app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/dashboard/index.html');
});

Server.start(port);
Sockets.listen();


//errr handling
process.on('uncaughtException', err => {
	console.log('\n\n\n', '\x1b[31m', '<---------- ERR ---------->\n', err, '\x1b[30m')
})



