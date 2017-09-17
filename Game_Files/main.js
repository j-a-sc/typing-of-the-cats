// CAT TEMPLATES

var $topRightCat = $(".top-right-cat");
var $topLeftCat = $(".top-left-cat");
var catRate = 6000;

// THE CATS MUST FLOW
setInterval( function () {
	spawnCat($topRightCat)
}, catRate);




function spawnCat($template) {
	$template.clone().appendTo($('body'))
		.removeClass("invisible")
		.addClass("active-cat")
		.animate({ right: "40%", top: "40%"}, 
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
	  		$phrase.css({
	  			"visibility": "hidden"
	  		});
	 		$cat.stop();
	 		$cat.find(".cat-image").css ({
	 			"background-image": "url('Images/explosion.png')"
	 		})
	  		$cat.fadeOut(2000, function () {
	  			$cat.remove();
	  		});

	  	}
  	});
});


//FUNCTION TO DISPLAY IF CAT REACHES YOU
function youdied() {
	var body = $('body');
	body.append('<h1 class="game-over"> YOU DIED </h1>');

}