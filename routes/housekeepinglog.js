var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function(req, res, next){
	var db = req.db;
	var collection = db.get('housekeepinglog');
	collection.find({}, {}, function(e, data){
		res.json(data);
	});
});


router.post('/add', function(req, res, next){
	var db = req.db;
	var collection = db.get('housekeepinglog');
	collection.insert(req.body, function(err, result){
		res.send(
			{'msg' : (err === null) ? '':'err..'}
		);
	});
});

router.delete('/delete/:id', function(req, res, next){
	var db = req.db;
	var collection = db.get('housekeepinglog');
	collection.remove({'_id': req.params.id}, function(err, result){
		res.send(
			{'msg': (err === null) ? '': 'err..'}
		);
	});
});

module.exports = router;
