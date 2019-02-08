
function caesarCipher(str, num) {
	num = num % 26;

	// turn string to lowercase
	var loweCaseString = str.toLowerCase();

	// The alphabets to array
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

	var newString = "";

	for (var i = 0; i < loweCaseString.length; i++) {
		var currentLetter = loweCaseString[i];

		// making the space in string part of the string
		if (currentLetter === " ") {
			newString += currentLetter;
			continue;
		}

		// Know the currentLetter index in th alphabet Array
		var currentIndex = alphabet.indexOf(currentLetter);
		// Moving the number of places we want
		var newIndex = currentIndex + num;

		if (newIndex > 25) newIndex = newIndex - 26;
			
		if (newIndex < 0) newIndex = 26 + newIndex;

		// if letter is uppercase in original string
		if (str[i] === str[i].toUpperCase()) {
			newString += alphabet[newIndex].toUpperCase();
		} 
		else newString += alphabet[newIndex];
	}

	console.log(newString);
}
caesarCipher('Javascript', -900);