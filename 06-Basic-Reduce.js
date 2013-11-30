function sumCount(element, object) {
	if(!object.hasOwnProperty(element)) {
			object[element] = 0;
	}
	object[element]++; 	
}

function countWords(inputWords) {
	var result = {};

	inputWords.reduce(function(element, nextElement) {
		sumCount(element, result);
		return nextElement;   
	});

	var last = inputWords[inputWords.length - 1];
	sumCount(last, result);

  	
	return result;
}

module.exports = countWords;
