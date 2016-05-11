	var gottaCatchEmAll = ["psyduck", "pikachu", "bulbasaur", "squirtle", "charmander", "goldeen", "chansey", "koffing", "jigglypuff"];
	var wins = 0;
	var losses = 0;
	var wordToGuess = ""
	var guessedLetters = [];
	var guessesLeft = 7;


	var randomizeWord = gottaCatchEmAll[Math.floor(Math.random() * gottaCatchEmAll.length)];
		for (var i = 0; i < randomizeWord.length; i++) {
		wordToGuess = wordToGuess + "*" + " ";
		}


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

document.onkeyup = function(event) {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	var inWord = false;

	for(var i = 0; i < randomizeWord.length; i++) {
		if(letter == randomizeWord[i]) {
			wordToGuess = changeLetter(wordToGuess, i, letter);
			inWord = true;
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
