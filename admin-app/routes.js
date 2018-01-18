var express = require('express');
var router = express.Router();
var DB = require('./db/main');
var apidelay = 0;


router.get('/templates', function(req, res, next) {
   DB.getTemplates(
   		function(docs) { setTimeout(function() { res.json(docs); }, apidelay); },
   		function(err) { res.status(500).send({err:JSON.stringify(err)}); }
   	);
});


router.post('/templates', function(req, res, next) {
   DB.insertTemplates(
   		req.body,
   		function(docs) { res.json(docs); },
   		function(err) { res.status(500).send({err:JSON.stringify(err)}); }
   	);
});

router.post('/templates/copy/:id/:cid', function(req, res, next) {
   console.log('COPY------>',req.params.id)
   DB.copyTemplates(
         req.params.id,
         req.params.cid,
         function(docs) { setTimeout(function() { res.json(docs); }, apidelay); },
         function(err) { res.status(500).send({err:JSON.stringify(err)}); }
      );
});

router.post('/templates/:id', function(req, res, next) {
   DB.updateTemplates(
   		req.params.id,
   		req.body,
   		function(docs) { res.json(docs); },
   		function(err) { res.status(500).send({err:JSON.stringify(err)}); }
   	);
});

router.delete('/templates/:id', function(req, res, next) {
   DB.removeTemplates(
   		req.params.id,
   		function(docs) { res.json(docs); },
   		function(err) { res.status(500).send({err:JSON.stringify(err)}); }
   	);
});



module.exports = router;	