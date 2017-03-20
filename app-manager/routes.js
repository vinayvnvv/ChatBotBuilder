var express = require('express');
var router = express.Router();
var modules = require('./route/modules')



router.use('/modules', modules);


router.get('/test', function(req, res, next) {
   res.send('TASK API vv');
});

module.exports = router;	