$(document).ready(function () {
	var player = getUrlParameter('player').toUpperCase();
	var gameId = getUrlParameter('game_id');

	$('.phone-button-increment').click(function() {
		var data = {};
		data[player] = '+';
		$.post('score/' + gameId, data, function(s) {
			console.log('incremented!');
		});
	});


	$('.phone-button-decrement').click(function() {
		var data = {};
		data[player] = '-';
		$.post('score/' + gameId, data, function(s) {
			console.log('incremented!');
		});
	})
	$('.phone-button-reset').click(function() {
		$.post('score/' + gameId, {reset: true}, function(s) {
			console.log('reset!!')
			refreshScores()
		});
	});
});