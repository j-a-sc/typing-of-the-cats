// IMPORTANT VARS
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
                  $rightMiddleCat, $bottomMiddleCat ];
var catRate = 2200;

// PHRASE ARRAY
var phraseArray = ["MARMOSET", "MONKEY", "ELEPHANT",
				   "DISGUISED","JANE EYRE", "Mary Shelley",
				   "GERMANY", "MAPLE TREE", "AARDVARK", "CAT RENDERING",
				   "SECRETLY DOG", "CENTERED DIV", "SPACE CAT", "ABACUS",
				   "AESOP", "AFTERSHOCK", "AGGRAVATE", "ALABAMA", "ALBATROSS",
				   "ALIBI", "ALLOSAURUS", "ANACHRONISM", "ANEMONE", "APPLESAUCE",
				   "BANANANANADA", "BANGLES", "BARBARISM", "BEANBAG", "BEEBOOBEEBOO",
				   "BLUEBERRY", "BLUNDER", "BOLSHEVIKISM", "BRONCHITIS", "BUREAUCRACY",
				   "CACOPHONY", "CANTALOUPE", "CARLESSNESS", "CURIOSITY", "CARPACCIO",
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
				   "OLIGOSACCHARIDE", "POLYSACCHARIDE", "ONOMATOPOEIA", "OPTHEALMOLOGIST",
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
				   "VICTIM", "VICTORIA", "VENUS", "VENEZUELA", "VLAIDIMIR", "VITAMINS", "VOCIFEROUSLY",
				   "VORACIOUSLY", "VOGUE", "VOLCANO", "WACKO", "WAFFLES", "WALLABIES", "WALRUSES",
				   "WALTZ", "WASABI", "WENSLEYDALE", "WEAKLING", "WEIRDO", "BIRMINGHAM", "WHIPLASH",
				   "WILLIAM", "WIFE", "WILLOW", "WITHERED", "WOOPITYDOO", "WRIGGLE", "WUSSES",
				   "XANTHIPPE", "XANADU", "XENOPHOBIC", "XYZYLOPHONE", "YELLOWFISH", "YELLOWISH",
				   "YEP", "YIKES", "YOGURT", "YUPPIEVILLE", "ZEALOUS", "ZIGZAGZOOP", "ZOMBIE",
				   "ZOOLOGY", "ZUCCHINI", "ZOO", "SPARTA", "SPARTAN", "ADAM", "DOM", "JACK", "PARAS",
				   "SEB", "JENNY", "CHRISTIAN", "ALISON", "NIALL", "JEMIMA", "LUCY", "KEIR", "MASH",
				   "LUKE", "SOPHIE", "KARL", "GEORGE", "PRI", "BRIAN", "KLEIN", "HENRY"



				   ];

// GAME STARTING FUNCTION

function startGame (){
	timer();
};

// TIMELOOP THAT SPAWNS CATS EVERY catRate

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

// CLONES TEMPLATE CAT AND PUTS NEW CAT INTO ANIMATION

function spawnCat($template) {

	var phraseNo = Math.floor(Math.random()*phraseArray.length);
	
	var $activeCat = $template.clone().appendTo($('body'))
		.removeClass("invisible").addClass("active-cat")
		.animate({ left: "45%", top: "40%"}, 
		         { duration: 8000, complete: youdied });		
		
		var $phrase = $activeCat.find(".phrase-holder .cat-phrase");
		$phrase.html(phraseArray[phraseNo]);

}

// PERFORMS CAT EXPLOSION ANIMATION AND REMOVES ELEMENT

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

$startButton.on("click", function () {
	$splashScreen.slideUp(2000, function () {
		$splashScreen.remove();
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
