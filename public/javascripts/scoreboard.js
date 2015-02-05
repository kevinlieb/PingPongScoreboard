$(document).ready(function () {
	var gameId = getUrlParameter('game_id');

	function refreshScores() {
		$.get('/score/' + gameId).done(function(data) {
			$('.p1-score').text(data.P1);
			$('.p2-score').text(data.P2);
			console.log('refreshed!')
		});
	}


	$('.button-increment').click(function() {
		var player = $(this).data('player');
		var data = {};
		data[player] = '+';
		$.post('/score/' + gameId, data, function(s) {
			refreshScores()
		});
	});


	$('.button-decrement').click(function() {
		var player = $(this).data('player');
		var data = {};
		data[player] = '-';
		$.post('/score/' + gameId, data, function(s) {
			refreshScores()
		});
	})

	setInterval(refreshScores, 1000);
	refreshScores()
});