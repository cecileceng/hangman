//Variables
	var gottaCatchEmAll = ["psyduck", "pikachu", "bulbasaur", "squirtle", "charmander", "goldeen", "chansey", "koffing", "jigglypuff"];
	var wordToGuess = "";
	var randomizeWordArray = [];
	var guessedLetters = [];
	var blanksAndLetters = [];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 7;

// Functions
function loadGame() {
	randomizeWord = gottaCatchEmAll[Math.floor(Math.random() * gottaCatchEmAll.length)];
	randomizeWordArray = randomizeWord.split("");
	for (var i = 0; i < randomizeWord.length; i++) {
		blanksAndLetters.push("_");
	}
	document.getElementById('wordToGuess').innerHTML = blanksAndLetters.join(" ");
}

function checkLetter(letter) {
		var inWord = false;
		for (var j = 0; j < randomizeWord.length; j++) {
			if (letter == randomizeWordArray[i]) {
					inWord == true;
			}
		}
				if(inWord) {
					document.getElementById('wordToGuess').innerHTML = randomizeWordArray.join(" ");
				}
				else {
					document.getElementById('guessedLetters').innerHTML = guessedLetters.join();
					guessesLeft--;
				}
}

//Program
loadGame();

document.onkeyup = function(event) {
	var guessedLetters = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetter(guessedLetters);
	var inTheWord = false;

	for(var i = 0; i < randomizeWord.length; i++) {
		if(letter == randomizeWord[i]) {
			wordToGuess = randomizeWordArray(wordToGuess, i, letter);
			inTheWord = true;
		}
	}
	if(!inTheWord && !randomizeWordArray(letter, guessedLetters)) {
		guessedLetters.push(letter);
	}

		var html = 
		"<p>Press a letter key to start guessing." + 
		"<br>" +
		wordToGuess + "</p>"
		"<p>Letters you have guessed: " +
		guessedLetters +
		"</p>" 
		"<p>Guesses you have left: " + 
		guessesLeft + 
		"</p>"+
		"<p>Pokemon you have captured: " + 
		wins + 
		"</p>" +
		"<p>Pokemon you have let escape: " + 
		losses + 
		"</p>" 
		;

		document.querySelector("#scoreboard").innerHTML = html;

}


/*
//Variables
	var gottaCatchEmAll = ["psyduck", "pikachu", "bulbasaur", "squirtle", "charmander", "goldeen", "chansey", "koffing", "jigglypuff"];
	var randomizeWordArray = [];
	var wins = 0;
	var losses = 0;
	var wordToGuess = ""
	var guessedLetters = [];
	var guessesLeft = 7;

// Functions
function loadGame() {
	randomizeWord = gottaCatchEmAll[Math.floor(Math.random() * gottaCatchEmAll.length)];
	randomizeWordArray = randomizeWord.split("");
}

function checkLetter(letter) {
		for (var i = 0; i < randomizeWord.length; i++) {
			if (letter == randomizeWordArray[i]) {
				if inWord == true;
			}
				if{

				}

}

		wordToGuess = wordToGuess + "*" + " ";

	function changeLetter(str, i, letter) {
	return str.substr(0, i) + letter + str.substr(i + 1);
	} 

	function inArray(letter, arr) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == letter) {
			return true;
		}
	}
	return false;
}

function reset() {
	randomizeWord = gottaCatchEmAll[Math.floor(Math.random()*gottaCatchEmAll.length)];
	wordToGuess = "";
	for(var i = 0; i < randomizeWord.length; i++) {
		wordToGuess = wordToGuess + "*" + " ";
	}
	turns = 7;
	guessedLetters = [];
}

//Program
loadGame();

document.onkeyup = function(event) {
	var guessedLetters = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetter(guessedLetters)
	var inTheWord = false;

	for(var i = 0; i < randomizeWord.length; i++) {
		if(letter == randomizeWord[i]) {
			wordToGuess = changeLetter(wordToGuess, i, letter);
			inTheWord = true;
		}
	}
	if(!inWord && !inArray(letter, guessedLetters)) {
		guessedLetters.push(letter);
	}

		var html = 
		"<p>Press a letter key to start guessing." + 
		"<br>" +
		wordToGuess + "</p>"
		"<p>Letters you have guessed: " +
		guessedLetters +
		"</p>" 
		"<p>Guesses you have left: " + 
		guessesLeft + 
		"</p>"+
		"<p>Pokemon you have captured: " + 
		wins + 
		"</p>" +
		"<p>Pokemon you have let escape: " + 
		losses + 
		"</p>" 
		;

		document.querySelector("#scoreboard").innerHTML = html;

}

//$("imageDiv").html(img src='x' />");

// document.wordToGuess.join(" ")
*/
