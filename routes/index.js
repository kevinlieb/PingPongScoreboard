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

router.get('/score/:game_id', function (req, res, next) {
	res.send(gamesList[req.params.game_id]);
});

router.post('/score/:game_id', function (req, res) {
	var response = 'fail';
		game = gamesList[req.params.game_id];
	if (req.body.P1) {
		response = 'P1 ';
		if (req.body.P1 === '+') {
			game.P1++;
			response = response + '+';
		} else if (req.body.P1 === '-') {
			game.P1--;
			response = response + '-';
		}
	} else if (req.body.P2) {
		response = 'P2 ';
		if (req.body.P2 === '+') {
			game.P2++;
			response = response + '+';
		} else if (req.body.P2 === '-') {
			game.P2--;
			response = response + '-';
		}
	} else if (req.body.reset) {
		game.scoreBeforeReset = {
			P1: game.P1,
			P2: game.P2
		}
		game.P1 = 0;
		game.P2 = 0;
		response = 'reset';
	} else if (req.body.undoReset) {
		if (game.scoreBeforeReset) {
			game.P1 = game.scoreBeforeReset.P1;
			game.P2 = game.scoreBeforeReset.P2;
			response = 'undo reset';
		}
	}
	if (response === 'fail') {
		res.send({
			"ok": false
		});
	} else {
		res.send({
			"ok": response
		});	
	}
});

router.get('/list', function (req, res) {
	res.send({Games: gamesList});
});

router.put('/new', function (req, res) {
	var newGame = {};
	newGame.id = gamesIndex;
	newGame.P1 = 0;
	newGame.P2 = 0;
	gamesList[gamesIndex] = newGame;
	gamesIndex++;
	res.send({
		"ok": newGame.id
	});
});

module.exports = router;
