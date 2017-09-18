var breakvar = false;
var $startButton = $(".start-button");
var $splashScreen = $(".splash-screen");
// CAT TEMPLATES

var $topRightCat = $(".top-right-cat");
var $topLeftCat = $(".top-left-cat");
var $bottomRightCat = $(".bottom-right-cat");
var $bottomLeftCat = $(".bottom-left-cat");
var $topMiddleCat = $(".top-middle-cat");
var $leftMiddleCat = $(".middle-left-cat");
var $rightMiddleCat = $(".middle-right-cat");
var $bottomMiddleCat = $(".bottom-middle-cat");
var $spawnArray = [$topRightCat, $topLeftCat, $bottomRightCat,
                  $bottomLeftCat, $topMiddleCat, $leftMiddleCat,
                  $rightMiddleCat, $bottomMiddleCat ]

var catRate = 500;

// THE CATS MUST FLOW

function timer () {
	setTimeout( function () {
		if ( breakvar === false ) {
			var catSpawnNo = (Math.floor(Math.random()*8));
			console.log(catSpawnNo);
			spawnCat($spawnArray[catSpawnNo]);
			timer();
		}
	}, catRate)
};

function startGame (){
	timer();
};

$startButton.on("click", function () {
	$splashScreen.fadeOut(2000, function () {
		$splashScreen.remove();
		startGame();
	})
});

function spawnCat($template) {
	$template.clone().appendTo($('body'))
		.removeClass("invisible")
		.addClass("active-cat")
		.animate({ left: "45%", top: "40%"}, 
		         { duration: 6000, complete: youdied });
}

// THIS SECTION RECORDS KEYPRESSES AND REMOVES FIRST STRING MEMBER
// OF THE PHRASE BOX

$(document).keydown(function(event) {

	var keypress = String.fromCharCode(event.keyCode);
  	$(".active-cat .cat-phrase").each(function (_, phrase) {
  		var $phrase = $(phrase);
  		console.log($phrase);
  		var string = $phrase.text();
  		var $cat = $phrase.parent().parent();
		if (keypress === string.charAt(0) )
	  		$phrase.text(string = string.substring(1));

	  	if (string === "") {
	  		catDie($phrase, $cat);
	  	}
  	});
});

function catDie(phrase, cat) {
	phrase.css({
	  			"visibility": "hidden"
	  		});
	 		cat.stop();
	 		cat.find(".cat-image").css ({
	 			"background-image": "url('Images/explosion.png')"
	 		})
	  		cat.fadeOut(2000, function () {
	  			cat.remove();
	  		});
}

//FUNCTION TO DISPLAY IF CAT REACHES YOU
function youdied() {
	var body = $('body');
	body.append('<h1 class="game-over"> YOU DIED </h1>');
	breakvar = true;
	$cat = $(".active-cat .cat-phrase").parent().parent();
	$cat.stop().fadeOut(2000, function () {
		cat.remove();
	});

}