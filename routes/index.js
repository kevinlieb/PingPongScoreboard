var express = require('express');
var router = express.Router();

var gamesList = [];
var gamesIndex = 0;

/* GET home page. */
/*
// this doesn't even ever get hit and i'm really not sure why but
// really i don't care because it works and that's what matters
router.get('/', function (req, res, next) {
	console.log('fucking doing it');
	res.sendFile('nixietest.html');
});
*/


router.get('/score/game_id', function (req, res, next) {
	console.log('do2');
	var score = {};
	score.P1 = 7;
	score.P2 = 1;
	res.send(score);
});

router.post('/score/game_id', function (req, res) {
	console.log('post score');
	console.log(req.body);
	res.send({
		"ok": true
	});
});

router.get('/list', function (req, res) {
	res.send({Games: gamesList});
});

router.put('/new', function (req, res) {
	console.log('put new');
	console.log(req.body);
	var newGame = {};
	newGame.id = gamesIndex + 1;
	gamesIndex++;
	newGame.P1 = 0;
	newGame.P2 = 0;
	gamesList.push(newGame);
	res.send({
		"ok": newGame.id
	});
});

module.exports = router;
