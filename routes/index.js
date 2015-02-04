var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/score/game_id', function (req, res, next) {
	var score = {};
	score.P1 = 7;
	score.P2 = 1;
	res.send(score);
});

router.post('/score/game_id', function (req, res) {
	var score = req;
	res.send('ok');
});

router.get('/list', function (req, res) {
	var list = [];
	list.push({
		"Game": 1,
		"P1": 0,
		"P2": 0
	});
	list.push({
		"Game": 2,
		"P1": 5,
		"P2": 7
	});
	res.send({Games: list});
})

module.exports = router;
