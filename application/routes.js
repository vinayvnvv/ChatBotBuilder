var express = require('express');
var router = express.Router();
var DB = require('./db/get-msgs');




router.get('/msgs/:id/:limit/:page', function(req, res, next) {
     DB.getMsgs(
          
            req.params.id, parseInt(req.params.limit), parseInt(req.params.page),
            function(docs) { setTimeout(function() { res.json(docs); }, 2000);  },
            function(err) { res.send("err"); }

     	)
 });

module.exports = router;	