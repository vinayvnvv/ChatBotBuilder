var express = require('express');
var router = express.Router();
var DB = require('./db/main');


router.get('/templates', function(req, res, next) {
   DB.getTemplates(
   		function(docs) { res.json(docs); },
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