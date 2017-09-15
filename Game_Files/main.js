
$testCat = $(".test-cat");


// setInterval(function() {
// 	$testCat.clone().appendTo($('body'));
// 	$testCat = $('test-cat');
// 	animateCat();
// }, 600);

function animateCat () {
	$testCat.animate({
		right: "40%",
		top: "40%"
	}, 6000, function() {
		youdied();
});
}

animateCat();

//window.setInterval

// THIS SECTION RECORDS KEYPRESSES AND REMOVES FIRST STRING MEMBER
// OF THE PHRASE BOX
$(document).keydown(function(event) {
  	$catPhrase = $(".cat-phrase").html();
	var keypress = String.fromCharCode(event.keyCode);

  	if (keypress === $catPhrase.charAt(0) ) {
 	
  		$alteredPhrase = $catPhrase.substring(1, $catPhrase.length);
  		$(".cat-phrase").html($alteredPhrase);
  	}


  	if ($(".cat-phrase").html() === "") {
  		$(".cat-phrase").css({
  			"visibility": "hidden"
  		});
 		$testCat.stop();
 		$(".cat-image").css ({
 			"background-image": "url('http://www.pngmart.com/files/4/Atomic-Explosion-PNG-Photos.png')"
 		})
  		$testCat.fadeOut(2000);
  	}
});


//FUNCTION TO DISPLAY IF CAT REACHES YOU
function youdied() {
	var body = $('body');
	body.append('<h1 class="game-over"> YOU DIED </h1>');
}

function catSpawner(arg) {

};