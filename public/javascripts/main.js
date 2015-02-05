$(document).ready(function () {

	var gamesListItemTemplate = $('.joinLink').remove();

	$.get('/list', function (gamesList) {
		if (gamesList && gamesList.Games && gamesList.Games.length) {
			gamesList = gamesList.Games;
			var container = $('#join_game_list ul'),
				game,
				newGamesListNode,
				i;
			for (i = 0; i < gamesList.length; i++) {
				game = gamesList[i];
				newGamesListNode = gamesListItemTemplate.clone().attr('data-game-id', game.id).html('game ' + game.id + ', currently ' + game.P1 + ' - ' + game.P2);
				container.append(newGamesListNode);
			}
		}
	});

});