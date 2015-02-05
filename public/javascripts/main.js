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
				newGamesListNode = gamesListItemTemplate.clone().html('<td><a class="joinLink link" data-game-id="' + game.id + '">game ' + game.id + ', currently ' + game.P1 + ' - ' + game.P2 + '</a></td>');
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
		$('.viewLink a').each(function() {
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