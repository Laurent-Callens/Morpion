$(document).ready(function() {

	$.fn.morpion = function(){
		var player = 1;
		var score_J1 = 0;
		var score_J2 = 0;

		function WhoPlay(){

			if (player == 1) {
				$('#currentPlayer').html('Au tour du Joueur 1 : X');
			}
			if (player == 2) {
				$('#currentPlayer').html('Au tour du Joueur 2 : O');
			}
		}

		function Replay(){
			$('.cell').each(function(){
				$(this).html('');
			});

		}
		$('.cell').each(function(index) {
			$(this).attr('id', index);
		});

		WhoPlay();

		$('.cell').click(function() {
			
			if ($(this).is(':empty')) {
				if (player == 1) {
			
					$(this).append('<p>X</p>');
					player = 2;

				}

				else {
				
					$(this).append('<p>O</p>');
					player = 1;
				}
			}
			else {
				alert('Case déja remplie !');
			}
			
			WhoPlay();
			if ($('.cell').is(':empty')) {
			//premiere ligne
				if ($('#0').text()=='X' && $('#1').text()=='X' && $('#2').text()=='X') {
				score_J1++;
				$('#playerOne').html('Score : '+score_J1);
				alert('Joueur 1 Gagne !');
				}

				if ($('#0').text()=='O' && $('#1').text()=='O' && $('#2').text()=='O') {
				score_J2++;
				$('#playerTwo').html('Score : '+score_J2);
				alert('Joueur 2 Gagne !');
				}
			//
			//deuxieme ligne
				if ($('#3').text()=='X' && $('#4').text()=='X' && $('#5').text()=='X') {
				score_J1++;
				$('#playerOne').html('Score : '+score_J1);
				alert('Joueur 1 Gagne !');

				}

				if ($('#3').text()=='O' && $('#4').text()=='O' && $('#5').text()=='O') {
				score_J2++;
				$('#playerTwo').html('Score : '+score_J2);
				alert('Joueur 2 Gagne !');
				}
			//
			//troisieme ligne
				if ($('#6').text()=='X' && $('#7').text()=='X' && $('#8').text()=='X') {
				score_J1++;
				$('#playerOne').html('Score : '+score_J1);
				alert('Joueur 1 Gagne !');
				}

				if ($('#6').text()=='O' && $('#7').text()=='O' && $('#8').text()=='O') {
				score_J2++;
				$('#playerTwo').html('Score : '+score_J2);
				alert('Joueur 2 Gagne !');
				}
			//
			//premiere colonne
				if ($('#0').text()=='X' && $('#3').text()=='X' && $('#6').text()=='X') {
				score_J1++;
				$('#playerOne').html('Score : '+score_J1);
				alert('Joueur 1 Gagne !');
				}

				if ($('#0').text()=='O' && $('#3').text()=='O' && $('#6').text()=='O') {
				score_J2++;
				$('#playerTwo').html('Score : '+score_J2);
				alert('Joueur 2 Gagne !');
				}
			//
			//deuxieme colonne
				if ($('#1').text()=='X' && $('#4').text()=='X' && $('#7').text()=='X') {
				score_J1++;
				$('#playerOne').html('Score : '+score_J1);
				alert('Joueur 1 Gagne !');
				}

				if ($('#1').text()=='O' && $('#4').text()=='O' && $('#7').text()=='O') {
				score_J2++;
				$('#playerTwo').html('Score : '+score_J2);
				alert('Joueur 2 Gagne !');
				}
			//
			//troisieme colonne
				if ($('#2').text()=='X' && $('#5').text()=='X' && $('#8').text()=='X') {
				score_J1++;
				$('#playerOne').html('Score : '+score_J1);
				alert('Joueur 1 Gagne !');
				}

				if ($('#2').text()=='O' && $('#5').text()=='O' && $('#8').text()=='O') {
				score_J2++;
				$('#playerTwo').html('Score : '+score_J2);
				alert('Joueur 2 Gagne !');
				}
			//
			//premiere diagonale
				if ($('#0').text()=='X' && $('#4').text()=='X' && $('#8').text()=='X') {
				score_J1++;
				$('#playerOne').html('Score : '+score_J1);
				alert('Joueur 1 Gagne !');
				}

				if ($('#0').text()=='O' && $('#4').text()=='O' && $('#8').text()=='O') {
				score_J2++;
				$('#playerTwo').html('Score : '+score_J2);
				alert('Joueur 2 Gagne !');
				}
			//
			//deuxieme diagonale
				if ($('#2').text()=='X' && $('#4').text()=='X' && $('#6').text()=='X') {
				score_J1++;
				$('#playerOne').html('Score : '+score_J1);
				alert('Joueur 1 Gagne !');
				}

				if ($('#2').text()=='O' && $('#4').text()=='O' && $('#6').text()=='O') {
				score_J2++;
				$('#playerTwo').html('Score : '+score_J2);
				alert('Joueur 2 Gagne !');
				}
			}
			else {
				alert('Match Nul !');	
			}
		});
		$('#replay').click(function() {
			Replay();
		});

	}

$('#grid').morpion();
});