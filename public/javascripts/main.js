$(document).ready(function () {

	var gamesListItemTemplate = $('.join_game_template').remove();

	$.get('/list', function (gamesList) {
		if (gamesList && gamesList.Games && gamesList.Games.length) {
			gamesList = gamesList.Games;
			var container = $('.join_game_container'),
				game,
				newGamesListNode,
				i;
			for (i = 0; i < gamesList.length; i++) {
				game = gamesList[i];
				newGamesListNode = gamesListItemTemplate.clone().html('<td><button class="button-reset"><a class="joinLink" data-game-id="' + game.id + '">Game ' + game.id + '</a></button></td><td>Player 1 - ' + game.P1 + ' : ' + game.P2 + ' - Player 2</td>');
				container.append(newGamesListNode);
			}
		}
	});

	function newGameDialog() {
		$.ajax({
			url: '/new',
			type: 'PUT'
		}).done(function(s) {
			showViewDialog(s.ok);
		});
	}

	function showViewDialog(game_id) {
		$('#main_cont').hide();
		$('#choice_dialog').show();
		$('.viewLink').each(function() {
			var $elem = $(this);
			$elem.attr('href', $elem.attr('href') + game_id);
		});
	}

	$('#new_game_cont button').click(newGameDialog);
	$('.join_game_container').on('click', '.joinLink', function(evt) {
		var game_id = $(this).data('game-id');
		showViewDialog(game_id);
	});


});