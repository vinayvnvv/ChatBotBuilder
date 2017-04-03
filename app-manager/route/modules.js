var express = require('express');
var router = express.Router();
var moduleDb = require('./../db/modules');
var Model = require('./../models/models');



router.get('/:id', function(req, res, next) {
   moduleDb.get(
        req.params.id,
        function(docs) { setTimeout(function() { res.json(docs) }, 2000);  },
        function(err) {}
   	)
});


router.post('/create/:id', function(req, res) {
	moduleDb.create(
          req.params.id,
          req.body,
          function(result) { setTimeout(function() { res.json(Model.success_obj(result)); }, 2000);  },
          function(err) { res.json(Model.error_obj(err)); }
		);
});

router.post('/update/:id/:moduleId', function(req, res) {

	moduleDb.update(
          req.params.id,
          req.params.moduleId,
          req.body,
          function(result) { setTimeout(function() { res.json(Model.success_obj(result)); }, 2200);  },
          function(err) { res.json(Model.error_obj(err)); }
		);

});


router.get('/init/:id', function(req, res, next) {
   moduleDb.getInit(
        req.params.id,
        function(docs) { setTimeout(function() { res.json(docs) }, 2000);  },
        function(err) {}
    )
});



router.post('/init/:id', function(req, res) {


  moduleDb.updateInit(
          req.params.id,
          req.body,
          function(result) { setTimeout(function() { res.json(Model.success_obj(result)); }, 2200);  },
          function(err) { res.json(Model.error_obj(err)); }
    );

});




module.exports = router;