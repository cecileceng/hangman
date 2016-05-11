// Variables
	var gottaCatchEmAll = ["psyduck", "pikachu", "bulbasaur", "squirtle", "charmander", "goldeen", "chansey", "koffing", "jigglypuff"];
	var guessedLetters = [];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 7;
	var randomizeWord = gottaCatchEmAll[Math.floor(Math.random() * gottaCatchEmAll.length)];
	var randomizeWordArray = [];
	console.log(randomizeWord)

	var wordToGuess = [];
	for (var i = 0; i < randomizeWord.length; i++) {
		wordToGuess[i] = "_";
		document.querySelector('#wordToGuess').innerHTML = (wordToGuess);


	}
	console.log(wordToGuess)

	function loadGame() {
	document.onkeyup = function(event)
	{
	var guessedLetters = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetter(guessedLetters);
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
	randomizeWordArray = randomizeWord.split("");
	for (var i = 0; i < randomizeWord.length; i++) {
		blanksAndLetters.push("_");
	}
	document.getElementById('wordToGuess').innerHTML = blanksAndLetters.join(" ");
}

	var lettersRemaining = randomizeWord.length;
	if (lettersRemaining > 0) {
	document.write(wordToGuess.join(" "));
	}
	else {
	for (var j = 0; j < randomizeWord.length; j++) {
	if (randomizeWord[j] === guess) {
	wordToGuess[j] = guess;
	lettersRemaining--;
 }
/*
 function reWriteStats() {
	randomizeWord = gottaCatchEmAll[Math.floor(Math.random()*gottaCatchEmAll.length)];
	for(var i = 0; i < randomizeWord.length; i++) {
		wordToGuess = wordToGuess + "_";
	}
	guessesLeft = 7;
	guessedLetters = [];
}
*/
function checkLetter(letter)
{
	var isInWord = false;
	console.log("Letter: " + letter);
	for(var i = 0; i < wordToGuess.length; i++)
	{
		if( letter == wordToGuess[i] ) {
			isInWord = true;
		}
	}
	if( isInWord ) 
	{
	guessedLetters = randomizeWord.split("");
	for (var i = 0; i < randomizeWord.length; i++) {
	blanksAndLetters.push("_");
	}
	document.getElementById('wordToGuess').innerHTML = blanksAndLetters.join(" ");

	if(!IsInWord && !inArray(letter, guessedLetters)) {
		guessedLetters.push(letter);
		}
			if(wordToGuess.indexOf("_") === -1) {
		reWriteStats();
		wins++;
	}

		if(guessesLeft == 0) {
		reWriteStats();
		losses++;
	}
	}

}
		var html = 
		"<p>" + 
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

//Program
loadGame();
	var guessedLetters = String.fromCharCode(event.keyCode).toLowerCase();
//	checkLetter(guessedLetters);


/*


function loadGame() {
	randomizeWordArray = randomizeWord.split("");
	for (var i = 0; i < randomizeWord.length; i++) {
		blanksAndLetters.push("_");
	}
	document.getElementById('wordToGuess').innerHTML = blanksAndLetters.join(" ");
}

/*
function reset() {
	randomizeWord = gottaCatchEmAll[Math.floor(Math.random()*gottaCatchEmAll.length)];
	randomizeWordArray = randomizeWord.split("");
	for (var i = 0; i < randomizeWord.length; i++) {
		blanksAndLetters.push("_");
	}
	guessesLeft = 7;
	lettersTried = [];
}
*/




/*
	function checkLetter(letter) {
		var inWord = false;
		for (var i = 0; i < randomizeWord.length; i++) {
			if (letter == randomizeWordArray[i]) {
					inWord == true;
			}
		}
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

	if(wordToGuess.indexOf("_") === -1) {
		reset();
		wins++;
	}

		if(guessesLeft == 0) {
		reset();
		losses++;
	}

				if(inWord) {
					document.getElementById('wordToGuess').innerHTML = randomizeWordArray.join(" ");
				}
				else {
					document.getElementById('guessedLetters').innerHTML = html;
					guessesLeft--;
				}
}

		var html = 
		"<p>" + 
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
