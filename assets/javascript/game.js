//array of alphabet and numbers
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1","2","3","4","5","6","7","8","9"];

//variables to track wins, losses, and number of guesses
var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 9;
var playingLetters = false;
var playingNumbers = false;

//On start click for letters game 
function isLetter() {

	var lettersGuessed = [];
	playingLetters = true;

	//clear winTag and lossTag
	document.getElementById("winTag").innerHTML = '<div id="winTag"></div>';
	document.getElementById("lossTag").innerHTML = '<div id="lossTag"></div>';
	//random letter guess for computer
	var computerLetter = letters[Math.floor(Math.random() * letters.length)];
	console.log(computerLetter);

	alert("Select any letter key to play.");

	document.onkeyup = function(event) {
        // Determine which key was pressed
        var userGuess = event.key;

        if (letters.indexOf(userGuess) > -1){

	        if (guessesLeft != 0){
			    if ((userGuess !== computerLetter) && (guessesLeft > 0)){
			    	lettersGuessed.push(userGuess);
			    	guessesLeft--;
			    	//print that to html
			    	document.getElementById("guessLeft").innerHTML = "<p>Guesses Left : " + guessesLeft + "</p>";
			    	document.getElementById("lettersGuessed").innerHTML = "<p>Your Guesses so far: " + lettersGuessed + "</p>";

			    } else if (userGuess === computerLetter){
			    	document.getElementById("winTag").innerHTML = 
			    	'<div class="alert alert-dismissible alert-success">' +
					'<button type="button" class="close" data-dismiss="alert">&times;</button>' +
					'<strong>Oh snap!</strong> You must be a pyschic.' +
					'</div>';
					//alert("Press Start to play again!");
			    	winCounter ++;
			    	guessesLeft = 9
			    	document.getElementById("wins").innerHTML = "<p>Wins: " + winCounter + "</p>";
			    	document.getElementById("guessLeft").innerHTML = "<p>Guesses Left : 10</p>";
			    	document.getElementById("lettersGuessed").innerHTML = "<p>Your Guesses so far: </p>";
			    }
			 } else {
			 	document.getElementById("lossTag").innerHTML = 
			    	'<div class="alert alert-dismissible alert-danger">' +
					'<button type="button" class="close" data-dismiss="alert">&times;</button>' +
					'<strong>Uh oh!</strong> Looks like you are not a pyschic. The answer was ' + computerLetter + 
					'</div>';
			 	//alert("Game over! The answer was " + computerLetter + ". Looks like you are not psychic...");
			 	//alert("Click Start to play again!")
			 	lettersGuessed = [];
			 	lossCounter ++;
			 	guessesLeft = 9
			 	//print to html
			 	document.getElementById("losses").innerHTML = "<p>Losses: " + lossCounter + "</p>";
			 	document.getElementById("guessLeft").innerHTML = "<p>Guesses Left : 10</p>";
				document.getElementById("lettersGuessed").innerHTML = "<p>Your Guesses so far: </p>";
			 }
		};

    };

};

var winNumCounter = 0;
var lossNumCounter = 0;
var guessesNumLeft = 3;

//On start click for numbers game 
function isNumber() {

	var emptyNumArray = [];
	playingNumbers = true;

	//clear winning lossing tags
	document.getElementById("numWinTag").innerHTML = '<div id="winTag"></div>';
	document.getElementById("numLossTag").innerHTML = '<div id="lossTag"></div>';
	//random number guess for computer
	var computerNumber = numbers[Math.floor(Math.random() * numbers.length)];
	
	alert("Select any letter key to play.");
	
	document.onkeyup = function(event) {
        // Determine which key was pressed
        var userGuess = event.key;

        if (numbers.indexOf(userGuess) > -1){

	        if (guessesNumLeft != 0){
			    if ((userGuess != computerNumber) && (guessesNumLeft > 0)){
			    	emptyNumArray.push(userGuess);
			    	guessesNumLeft--;
			    	//print that to html
			    	document.getElementById("numberGuessLeft").innerHTML = "<p>Guesses Left : " + String(guessesNumLeft) + "</p>";
			    	document.getElementById("numberArray").innerHTML = "<p>Your Guesses so far: " + emptyNumArray + "</p>";

			    } else if (userGuess == computerNumber){

			    	document.getElementById("numWinTag").innerHTML = 
			    	'<div class="alert alert-dismissible alert-success">' +
					'<button type="button" class="close" data-dismiss="alert">&times;</button>' +
					'<strong>Oh snap!</strong> You must be a pyschic.' +
					'</div>';
					//alert("Press Start to play again!");
			    	//alert("You must be psychic!");
			    	winNumCounter ++;
			    	guessesNumLeft = 3
			    	document.getElementById("numberWins").innerHTML = "<p>Wins: " + String(winNumCounter) + "</p>";
			    	document.getElementById("numberGuessLeft").innerHTML = "<p>Guesses Left : 4</p>";
			    	document.getElementById("numberArray").innerHTML = "<p>Your Guesses so far: </p>";
			    }
			 } else {
			 	
			 	document.getElementById("numLossTag").innerHTML = 
			    	'<div class="alert alert-dismissible alert-danger">' +
					'<button type="button" class="close" data-dismiss="alert">&times;</button>' +
					'<strong>Uh oh!</strong> Looks like you are not a pyschic. The answer was ' + computerNumber + 
					'</div>';
			 	//alert("Game over! The answer was " + computerNumber + ". Looks like you are not psychic...");
			 	//alert("Click Start to play again")
			 	emptyNumArray = [];
			 	lossNumCounter ++;
			 	guessesNumLeft = 3
			 	//print to html
			 	document.getElementById("numberLosses").innerHTML = "<p>Losses: " + String(lossNumCounter) + "</p>";
			 	document.getElementById("numberGuessLeft").innerHTML = "<p>Guesses Left : 4</p>";
				document.getElementById("numberArray").innerHTML = "<p>Your Guesses so far: </p>";
			 }
		};

    };

};


















