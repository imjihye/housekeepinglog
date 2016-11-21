var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/list', function(req, res, next){
// 	var db = req.db;
// 	var collection = db.get('housekeepinglog');
// 	collection.find({}, {}, function(e, data){
// 		res.json(data);
// 	});
// });


module.exports = router;
