function isPalindrome(string) {
	// Turn every letters to lowercase
	string = string.toLowerCase();

	// Turn lowerCase string to an array
	var characterArr = string.split('');

	/*
	** We will be ignore punctuation marks 
	** or any thing not an alphabetica letter
	** turn all letters in the alphabet into an array
	*/ 
	var validCharacters = "abcdefghijklmnopqrstuvwxyz".split('');

	// Stripout any character that is not a letter
	var lettersArr = [];
	characterArr.forEach(char => {
		// Anything not in the validCharacters array will be -1
		if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
	});

	// if the words matches itself both forward & backward log true
	if (lettersArr.join('') === lettersArr.reverse().join('')) return console.log(true);
	else return console.log(false);

}

isPalindrome("Madam I'm Adam");