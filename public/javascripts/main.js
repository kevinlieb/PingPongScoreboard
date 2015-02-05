$(document).ready(function () {

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
	$('.joinLink').click(function(evt) {
		var game_id = $(this).data('game-id');
		showViewDialog(game_id);
	});

});