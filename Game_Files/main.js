


$testCat = $(".test-cat");

$testCat.animate({
	right: "40%",
	top: "40%"
}, 6000, function() {
	youdied();
});



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
  		$testCat.fadeOut();
  	}
});


//FUNCTION TO DISPLAY IF CAT REACHES YOU
function youdied() {
	var body = $('body');
	body.append('<h1 class="game-over"> YOU DIED </h1>');
}
