function harmlessRansomNote (noteText, magazineText){
	/* 
	* Every word in noteText and magazineText
	* is changed into an array of words
	* e.g this is all => ['this','is','all'] using .split(' ')
	*/
	var noteArr = noteText.split(' ');
	var magazineArr = magazineText.split(' ');

	var magazineObj = {};

	magazineArr.forEach(word => {
		// Add the word to the magazineObj and increment by 1
		if (!magazineObj[word]) magazineObj[word] = 0;
		magazineObj[word]++;
	});

	// If the neccessary word is present
	var noteIsPossible = true;

	noteArr.forEach(word => {
		if (magazineObj[word]) {
			magazineObj[word]--;
			if (magazineObj[word] < 0) noteIsPossible = false;
		} else {
			noteIsPossible = false
		}
	});
	// if it is possible it will log true otherwise false
	return console.log(noteIsPossible);
}

harmlessRansomNote('this is it', 'this is nigeria it is an awesome place to live in');