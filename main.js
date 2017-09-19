// IMPORTANT VARS
var breakvar = false;
var $startButton = $(".start-button");
var $splashScreen = $(".splash-screen");
var totalSpawnNo = 0;
var $bossBanner = $(".boss-banner");
var lives = 3;
var $lifeOne = $("#1");
var $lifeTwo = $("#2");
var $lifeThree = $("#3");

// CAT TEMPLATES
var $topRightCat = $(".top-right-cat");
var $topLeftCat = $(".top-left-cat");
var $bottomRightCat = $(".bottom-right-cat");
var $bottomLeftCat = $(".bottom-left-cat");
var $topMiddleCat = $(".top-middle-cat");
var $leftMiddleCat = $(".middle-left-cat");
var $rightMiddleCat = $(".middle-right-cat");
var $bottomMiddleCat = $(".bottom-middle-cat");
var $ninjaLeft = $(".ninja-left");
var $ninjaRight = $(".ninja-right");

var $spawnArray = [$topRightCat, $topLeftCat, $bottomRightCat,
                  $bottomLeftCat, $topMiddleCat, $leftMiddleCat,
                  $rightMiddleCat, $bottomMiddleCat, $ninjaLeft,
                  $ninjaRight ];
var catRate = 2400;

// PHRASE ARRAY
var phraseArray = ["MARMOSET", "MONKEY", "ELEPHANT",
				   "DISGUISED","JANE EYRE", "MARY SHELLEY",
				   "GERMANY", "MAPLE TREE", "AARDVARK", "CAT RENDERING",
				   "SECRETLY DOG", "CENTERED DIV", "SPACE CAT", "ABACUS",
				   "AESOP", "AFTERSHOCK", "AGGRAVATE", "ALABAMA", "ALBATROSS",
				   "ALIBI", "ALLOSAURUS", "ANACHRONISM", "ANEMONE", "APPLESAUCE",
				   "BANANANANADA", "BANGLES", "BARBARISM", "BEANBAG", "BEEBOOBEEBOO",
				   "BLUEBERRY", "BLUNDER", "BOLSHEVIKISM", "BRONCHITIS", "BUREAUCRACY",
				   "CACOPHONY", "CANTALOUPE", "CARELESSNESS", "CURIOSITY", "CARPACCIO",
				   "CEREBELLUM", "CHAUVINISM", "CHEESECAKE", "CHRYSANTHEMUM", "CORDUROY",
				   "CRANBERRIES", "DARLING", "DARWINISM", "DEBRA", "DERMATOLOGIST",
				   "DERRICK", "DISCORD", "DOCTOR", "DROOPS", "EARTHWORM", "ELECTROLYSIS",
				   "ELOISE", "ELOQUENCE", "EMBEZZLE", "FANDANGO", "FAVOURITE",
				   "FETTUCCINE", "FEUDALISM", "FIBERGLASS", "FILTERED", "FISHMONGER",
				   "FLOUNDER", "FOOLISHNESS", "FORK", "FRANKFURTER", "FROGURT",
				   "FRUSTRATION", "FUZZY", "GENTLEMAN", "GIZZARD", "GLOBEFISH",
				   "GNOME", "GOOSEBERRY", "GOSSIPMONGER", "GRINNING", "HTML",
				   "HALBERD", "HANKERCHIEF", "HEAVYWEIGHT", "HEDGEHOG", "HIGHWAYMAN",
				   "HIPPOPOTAMUS", "HMMMMM", "HOLLOW", "HYDRA", "HYPOTHERMIA",
				   "HUSTLE", "IGNITION", "IMMIGRATION", "IMPERIALISM", "INDIGESTION",
				   "INFLUENZA", "INDOLENT", "INSECURE", "JAQUELINE", "JELLYFISH",
				   "JOHANNESBURG", "JOLENE", "JOVIAL", "KINGFISHER", "KNICKERBOCKERS",
				   "KOBAYASHI", "LASAGNA", "LAUGHINGSTOCK", "LEECHES", "LEGWARMERS",
				   "LEMMINGS", "LIMOSINE", "LIPOSUCTION", "LOGANBERRY", "LOUISIANA",
				   "MISSISSIPPI", "LYCANTHROPE", "MANIFOLD", "MERFOLK", "MARIGOLD",
				   "MAUSOLEUM", "MAYONNAISE", "MECHANISM", "MELANCHOLY", "MINOTAUR",
				   "MISCALCULATION", "MICROWAVABLE", "MORPHEUS", "MOBIUS", "MOROSE",
				   "MOONLIGHTING", "MUSHROOM", "NARCISSISM", "NECESSITIES", "NECTARINES",
				   "NEOPHYTE", "NEPOTISM", "NEPTUNE", "NERVOUS", "NEUROLOGIST", "NEUROMANCER",
				   "NIGHTINGALE", "NOBLE", "NOCTURNAL", "NINJA", "NOZZLE", "NOUVEAU", "NUCLEIC",
				   "NULLIFY", "NUN", "NYLON", "OBSEQUIOUS", "OBSTINATE", "OLIGARCHY",
				   "OLIGOSACCHARIDE", "POLYSACCHARIDE", "ONOMATOPOEIA", "OPTHALMOLOGIST",
				   "OLIVER", "OLIVIA", "OOPS", "OOZE", "OPPOSITE", "ORGANIC", "ORNAMENT",
				   "OUTLAW", "OXYMORON", "OYSTERS", "PALEONTOLOGY", "PANCREAS", "PANIC",
				   "PANTALOON", "PARSIMONIOUS", "PAPRIKA", "PARADE", "PAPER", "PAPAYA",
				   "PAPARAZZI", "PARALYSIS", "PEACHEY", "PEACOCK", "PEDIATRICIAN",
				   "PEGASUS", "PALANQUIN", "PIGGISHNESS", "PILGRIMAGE", "PINEAPPLE",
				   "PINEAPPLEPIE", "PINECONES", "PINK", "PLACEBO", "PITTERPATTER", 
				   "PLUTONIUM", "POCAHONTAS", "POINTILLISM", "POET", "POLITICIANS",
				   "PSSSSSSST", "PSYCHIATRIST", "POWDER", "POTATO", "PUMPKIN", "PUNK",
				   "PUPIL", "PUPPET", "PURCHASABLE", "PUZZLEMENT", "PURSUER", "PYRAMIDS",
				   "PYTHON", "QUACK", "QUAIL", "QUASAR", "QUEBECOIS", "RADISH", "RACCOON",
				   "RAM", "RPG", "RASPUTIN", "RAVINE", "RAVIOLIS", "RAW", "RAZZMATAZZ",
				   "RECTANGLES", "RELISH", "RESOLUTE", "RETAINER", "REPUBLIC", "REMARKABLE",
				   "REVENGE", "RHINOCEROS", "RHYTHM N RHYME", "RICKSHAW", "RIGATONI", 
				   "RIPE", "ROBERTO", "ROSEMARY", "ROTTWEILER", "ROUGHAGE", "ROUX", 
				   "RUIN", "RUSSIA", "SABOTAGE", "SAGITTARIUS", "SAILOR", "SALAMANDERS",
				   "SALMONELLA", "SAMURAI", "SANGUINE", "SANTIAGO", "SAPPHIRE",
				   "SASHIMI", "SANCTUARY", "SAXOPHONE", "SCAPEGOAT", "SCHIZOPHRENIA",
				   "SHAMPOO", "SCURVY", "SHAKESPEARE", "SEGREGATE", "SHAMMALLAMA",
				   "SEMINAR", "SHAWNEE", "SHHHHHH", "SHORT", "SIDEBURNS", "SINGSONG",
				   "SKELETONS", "SIOUX", "SKIES", "SKIRMISH", "SLACKER", "SLAV", "SLENDER",
				   "SLIPPERY", "SNAPDRAGON", "SMEGHEAD", "SNIFF", "SOCIALISM", "SOCRATES",
				   "SOLEMN", "SOMBRERO", "SOMMELIER", "SOPRANO", "SPATULA", "SPEEDBOAT",
				   "SPINACH", "SPLODGE", "SPICY", "SPINSTER", "SQUID", "SQUIRREL", "STAGEHAND",
				   "STILTON", "STEPHEN", "SUBMARINE", "STRAWBERRY", "SIMULATION", "SUGAR",
				   "SULPHURIC", "SUDDENLY", "STUPID", "SWAHILI", "SWASHBUCKLER", "SYCOPHANT",
				   "TACITURN", "TAHITI", "TAIWAN", "TANGERINES", "TANNIN", "TAXES", "TAURINE",
				   "TAXIDERMY", "TEDIOUS", "TEETOTALER", "TELEVISIONS", "TENNESSEE", "TEPID",
				   "TERMINATION", "TERMINOLOGY", "TESTOSTERONE", "TEXAS", "THEOCRACY",
				   "THERESA", "THOROUGH", "THRESHOLD", "THRILL", "THROWAWAY", "THERAPEUTIC",
				   "THYROID", "TIBET", "TIMESHARE", "TOOTHPASTE", "TORNADO", "TINTIN", "TIC TAC",
				   "TREASURE", "TRIANGLES", "TRICERATOPS", "TRICKERIER", "TRIGONOMETRY", "TRUNCHEON",
				   "TUTANKHAMEN", "TURNIP", "TROMBONE", "TRIVIAL", "TWEEZERS", "TYPIST", "TYRANT",
				   "UFO", "USA", "UGH", "UKELELE", "UMBRELLAS", "UNDERDOG", "URANIUM", "UNPLEASANT",
				   "UNSHAKEN", "UNWORTHY", "UPSTART", "VACANCIES", "VAGABOND", "VAGUE", "VAMPIRE",
				   "VANILLA", "VARNISH", "VEGETABLE", "VEGETARIANS", "VELOCIRAPTOR", "VETERINARIAN",
				   "VICTIM", "VICTORIA", "VENUS", "VENEZUELA", "VLADIMIR", "VITAMINS", "VOCIFEROUSLY",
				   "VORACIOUSLY", "VOGUE", "VOLCANO", "WACKO", "WAFFLES", "WALLABIES", "WALRUSES",
				   "WALTZ", "WASABI", "WENSLEYDALE", "WEAKLING", "WEIRDO", "BIRMINGHAM", "WHIPLASH",
				   "WILLIAM", "WIFE", "WILLOW", "WITHERED", "WOOPITYDOO", "WRIGGLE", "WUSSES",
				   "XANTHIPPE", "XANADU", "XENOPHOBIC", "XYZYLOPHONE", "YELLOWFISH", "YELLOWISH",
				   "YEP", "YIKES", "YOGURT", "YUPPIEVILLE", "ZEALOUS", "ZIGZAGZOOP", "ZOMBIE",
				   "ZOOLOGY", "ZUCCHINI", "ZOO", "SPARTA", "SPARTAN", "ADAM", "DOM", "JACK", "PARAS",
				   "SEB", "JENNY", "CHRISTIAN", "ALISON", "NIALL", "JEMIMA", "LUCY", "KEIR", "MASH",
				   "LUKE", "SOPHIE", "KARL", "GEORGE", "PRI", "BRIAN", "KLEIN", "HENRY", "SKIN"



				   ];

// GAME STARTING FUNCTION

function startGame (){
	timer();
};

// TIMELOOP THAT SPAWNS CATS EVERY catRate

function timer () {
	setTimeout( function () {
		if ( breakvar === false ) {
			
			if (totalSpawnNo >= 10)
				catRate = 2200;
			// if (totalSpawnNo >= 10)
			// 	catRate = 2100;
			if (totalSpawnNo >= 15)
				catRate = 2050;
			if (totalSpawnNo >= 20)
				catRate = 2000;
			if (totalSpawnNo >= 30)
				catRate = 200;
			if (totalSpawnNo === 55) {
				breakvar = true;
				spawnBoss();
			} else {
			var catSpawnNo = (Math.floor(Math.random()*9));
			//SET CAT SPAWN FOR TESTING
			//var catSpawnNo = 9;  
			spawnCat($spawnArray[catSpawnNo]);
			totalSpawnNo++;
			}

			timer();
		}
	}, catRate)
};

// CLONES TEMPLATE CAT AND PUTS NEW CAT INTO ANIMATION

function spawnCat($template) {

	var phraseNo = Math.floor(Math.random()*phraseArray.length);

// NORMAL CAT SPAWNER
	if ( $template.hasClass("cat")) {
		var $activeCat = $template.clone().appendTo($('body'))
			.removeClass("invisible").addClass("active-cat")
			.animate({ left: "43%", top: "41%"}, 10000, function(){
				console.log(this);
				$this = $(this);
				$this.find('.cat-image').css({
					"background-image": "url('https://cdn.pixabay.com/photo/2016/03/31/15/23/explosion-1293246_960_720.png')",
					"background-size": "100% 100%",
					"background-repeat": "no-repeat"
				});
				$this.find('.phrase-holder').addClass('invisible');
				$this.fadeOut(3000, function (){
						$this.remove();
					}) 
				removeLife();
			});
		var $phrase = $activeCat.find(".phrase-holder .cat-phrase");
		$phrase.html(phraseArray[phraseNo]);
		
// NINJA CAT SPAWNER		
	} else if ( $template.hasClass("ninja")) {
		var $activeCat = $template.clone().appendTo($('body'))
			.removeClass("invisible").addClass("active-cat")
			.animate({ left: "43%", top: "41%"},
				{ duration: 8000, queue: false, complete: function() {
				console.log(this);
				$this = $(this);
				$this.find('.ninja-cat-image').css({
					"background-image": "url('https://cdn.pixabay.com/photo/2016/03/31/15/23/explosion-1293246_960_720.png')",
					"background-size": "100% 100%",
					"background-repeat": "no-repeat"
				});
				$this.find('.phrase-holder').addClass('invisible');
				$this.fadeOut(3000, function (){
						$this.remove();
					}) 
				removeLife();
					}		
			})
			.fadeOut(600)
			.delay(600)
			.fadeIn(600)
			.delay(600)
			.fadeOut(600)
			.delay(600)
			.fadeIn(600)
			.delay(600)
			.fadeOut(600)
			.delay(600)
			.fadeIn(800);
		var $phrase = $activeCat.find(".phrase-holder .cat-phrase");
		$phrase.html(phraseArray[phraseNo]);
	}
}


function spawnBoss () {
	$playerModel = $(".player-model");
	$playerModel.animate({left: "+=500px", top: "-=100px"}, 500, function () {
		$cat = $(".active-cat .cat-phrase").parent().parent();
		$cat.stop(true, false).fadeOut(100);
		console.log($bossBanner);
		$bossBanner
		.delay(400)
		.fadeIn(500).delay(100)
		.fadeOut(500).delay(100)
		.fadeIn(500).delay(100)
		.fadeOut(500).delay(100)
		.fadeIn(500).delay(100)
		.fadeOut(500, function() {
			$('.life-counter').fadeOut(1000);
			$bossCat = $('.boss-cat');
			$bossCat.addClass('active-cat').fadeIn(2000);
			$('.boss-cat').animate({left: "65%"}, 18000, function(){
				youdied();
			})
		})
		})
};
// PERFORMS CAT EXPLOSION ANIMATION AND REMOVES ELEMENT

function catDie(phrase, cat) {
	phrase.css({
	  			"visibility": "hidden"
	  		});
	 		cat.stop(true, false);
	 		if (cat.hasClass("boss-cat")) {
	 			youWin();
	 		}
	 		cat.find(".cat-image").css ({
	 			"background-image": "url('Images/explosion.png')"
	 		})
	 		cat.find(".boss-image").css ({
	 			"background-image": "url('Images/explosion.png')"
	 		})
	 		cat.find(".ninja-cat-image").css ({
	 			"background-image": "url('Images/explosion.png')",
	 		})
	 		// cat.find("###NEWNINJAID###").css ({
	 		// 	"opacity": "1",
	 		// 	"display": "block",
	 		// 	"visibility": "visible"
	 		//})
	  		cat.fadeOut(2000, function () {
	  			cat.remove();
	  		});
}

//REMOVAL OF LIVES AND PLAYER LOSE FUNCTION TO DISPLAY IF CAT REACHES YOU

function removeLife() {
	if ($lifeThree.hasClass("gone") && $lifeTwo.hasClass("gone") && $lifeOne.hasClass("gone")) {
		youdied();
	} else if ($lifeTwo.hasClass("gone") && $lifeThree.hasClass("gone")) {
		addGone($lifeOne);
	} else if ($lifeThree.hasClass("gone")) {
		addGone($lifeTwo);
	} else {
		addGone($lifeThree);
	}
}

function addGone(life) {
	life.css({
		"background-image": "url('https://cdn.pixabay.com/photo/2016/03/31/15/23/explosion-1293246_960_720.png')",
		"background-size": "60px 60px"
	})
	.fadeOut(700).addClass("gone");
}


function youdied() {
	$gameOver = $(".game-over");
	$gameOver.addClass('visible');
	console.log($gameOver);
	breakvar = true;
	$('.player-model').addClass('player-dead');
	$playerDead = $('.player-dead');
	$playerDead.hide().fadeIn(700).delay(500).fadeOut(3000);
	$cat = $(".active-cat .cat-phrase").parent().parent();
	$cat.stop().fadeOut(2000, function () {
	});

}

$startButton.on("click", function () {
	$splashScreen.slideUp(2000, function () {
		startGame();
	})
});


// RECORDS KEYPRESSES AND REMOVES FIRST STRING MEMBER OF THE PHRASE BOX

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

// PLAY AGAIN BUTTON

$('.game-over').on('click', function (){
	breakvar = false;
	totalSpawnNo = 0;
	$splashScreen.slideDown(2000, function (){
		$playerDead.stop();
		$('.player-model').removeClass('player-dead').css({
			'display':'block',
			'visibility':'visible',
			'opacity': '1'
		});		
	});
	$gameOver.removeClass('visible');
	$('.lives').removeClass('gone').fadeIn(400).css({
		"background-image": "url('http://diysolarpanelsv.com/images/clipart-nail-head-png-images-28.png')",
		"background-size": "80px 80px"
	})
});

// WIN GAME

function youWin() {
	$(".main-title").html("Well Done!");
	$(".instructions").html("Thanks to your heroic efforts Boss cat has been defeated! <br/><br/>"
		+ "With the tyranny of Boss cat at an end, his cute yet deadly legions are scattered to the winds "
		+ "and robots throughout the galaxy can live in peace once more, without the constant threat of "
		+ "the pan-galactic feline war machine <br/><br/>"
		+ "Congratulations hero, and thank you for playing!");
	$(".start-button").hide();
	$(".main-title").addClass("gold");
	$splashScreen.slideDown(4000);
	
}