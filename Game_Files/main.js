


$testCat = $(".test-cat");

$testCat.animate({
	right: "40%",
	top: "40%"
}, 10000, function() {});

$(document).keydown(function(event) {
  	$catPhrase = $(".cat-phrase").html();
	var keypress = String.fromCharCode(event.keyCode);

	console.log(keypress);

  	if (keypress === $catPhrase.charAt(0) ) {
 		console.log("CAT MATCH DETECTED");
  		$alteredPhrase = $catPhrase.substring(1, $catPhrase.length);
 		console.log($alteredPhrase);
  		$(".cat-phrase").html($alteredPhrase);
  	}
 	
  	

});