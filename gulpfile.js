var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')
app.use(cors());
var http = require('http').Server(app);
var gulp_task = require('./Server/task');
var Server = new gulp_task(app, http);
var path = require('path');
var Sockets = new (require('./application/socket/socket')) (http);
var managerApi = require('./app-manager/routes');

var port = 3001;



// app.set('views', path.join(__dirname, 'ui'));
// // app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'ui')));
app.use(express.static(path.join(__dirname, '/')));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', function(req, res) {
	setTimeout(function() { res.send("hello"); }, 3000);
})

app.use('/api/manager', managerApi);


Server.start(port);
Sockets.listen();



