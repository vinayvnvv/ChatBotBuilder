var express = require('express');
var router = express.Router();
var moduleDb = require('./../db/modules');
var Model = require('./../models/models');



router.get('/:id', function(req, res, next) {
   moduleDb.get(
        req.params.id,
        function(docs) { res.json(docs) },
        function(err) {}
   	)
});


router.post('/create/:id', function(req, res) {
	moduleDb.create(
          req.params.id,
          req.body,
          function(result) { res.json(Model.success_obj(result)); },
          function(err) { res.json(Model.error_obj(err)); }
		);
});

router.post('/update/:id/:moduleId', function(req, res) {

	moduleDb.update(
          req.params.id,
          req.params.moduleId,
          req.body,
          function(result) { res.json(Model.success_obj(result)); },
          function(err) { res.json(Model.error_obj(err)); }
		);

});

module.exports = router;