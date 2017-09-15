


$testCat = $(".test-cat");

$testCat.animate({
	right: "40%",
	top: "40%"
}, 10000, function() {});

$("#target").keypress(function(event) {
  	$catPhrase = $(".cat-phrase").html();
 	console.log($catPhrase.charAt(0));
 	console.log($(this).val());
  	console.log(event);

  	if ($(this).val() === $catPhrase.charAt(0) ) {
  		console.log("CAT MATCH DETECTED");
  		console.log($catPhrase);
  		$alteredPhrase = $catPhrase.substring(1, $catPhrase.length);
  		console.log($alteredPhrase);
  		$(".cat-phrase").html($alteredPhrase);

  	}
  	$("#target").val('')
  	

});