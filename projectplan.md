# Project Ideas #
	
## TYPING OF THE CATS ##

### MVP ##
- Instruction screen 
- you are a robot in the middle of the screen, enemies are cats, type phrases to defeat the cats before they
get to you and you lose.
	- cats js animations moving towards middle of screen, keyword submitted character by character by form submission, once completed animation stopped. if animation not stopped by a certain time (ie hits player), game end/life loss will trigger.
- cats gradually get faster through the game OR phrases gradually get longer
	phrases - at certain preallocated gametimes array of phrases used switched to array with more difficult phrases inside
	faster - at preallocated gametimes variables changed so animations move more quickly and player loss is determined in less time.

### Additional Features ###
- Robo lives system
	- life counter added
- BOSS CAT, large cat that moves slowly onto screen, typing phrase is a paragraph from the cat page of wikipedia;
	- made as new level with one bespoke cat with increased size and difficulty
- Cat sounds whenever you defeat a feline foe, cool robot music the rest of the time
	- HTML5 sound tied to events
- more animations
	- general polish in css/html
- more enemy types eg. stealth cats that appear near to the player. Cat squads that appear in fives with shorter words
	- %chance if statement for each cat spawn to be a rare special different spawn
- limited use powers / potentially bought in a between level shop, e.g. clear screen of cats, invulnerability for a time, every keypress counts at the right keypress for 1 second.
	- special functions activatably by player that changes lots of vars and kills aniimations etc.



## ROBOTS ##

### MVP ###

- Robot that can navigate a maze by user programming
	-robot moves in animations, position stored in variables and disallowed positions stored in matrix and checked against whenever robot tries to move
	-using eval() user text functions such as moveup(1), wait(1) are converted to js and used in the program to move the robot. User has to construct a basic bit of code to move the robot around the maze using commands and if statements and get to the end 


### Additional Features ###

- maze has fog of war
	- robot position used to black out squares a certain distance away
- multiple levels, different challenges
	- shape of levels a challenge, add environmental features that turn on and off each tick
- Enemies
	- traps that robot can fall into and lose a life, enemies that move around maze and check if their position matrix is the same as robot every interval.
- html css
	-polish with sounds on various events, eg robot death, map complete, 
- two player coop, second robot that can help by doing tasks such as standing on buttons allowing other robot to escape.
	- replicate code written so far for second robot and add new positional matrix features such as buttons and gates.



