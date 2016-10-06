$(document).ready(main);

var vie;
var nbraleat;



function main(){

	function reset(){
		vie = prompt("Choisissez le nombre de vie");
		$("span").text(vie);
		var min = parseInt(prompt("Choisissez un nombre aléatoire minimal"));
		var max = parseInt(prompt("Choisissez un nombre aléatoire maximal"));
		nbraleat = Math.floor(Math.random() * (max - min + 1)) + min;

	}


	function clickValider(){

		var taper = $("input").val();

		if (taper == nbraleat){
			alert("Gagné");
			reset();
		}

		else if(taper > nbraleat){
			alert("Perdu, votre nombre est trop grand");
			vie-- ;
			$("span").text(vie);

		}

		else  {
			alert("Perdu, votre nombre est trop petit");
			vie-- ;
			$("span").text(vie);

		}	

	}

	$("button").click(function(){

		clickValider()


	});

	reset();

}

