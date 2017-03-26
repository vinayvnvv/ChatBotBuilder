var express = require('express');
var router = express.Router();
var DB = require('./db/get-msgs');




router.get('/msgs/:id', function(req, res, next) {
     DB.getMsgs(
          
            req.params.id,
            function(docs) { res.json(docs); },
            function(err) { res.send("err"); }

     	)
 });

module.exports = router;	