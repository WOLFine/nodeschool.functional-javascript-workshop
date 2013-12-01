function reduce(arr, fn, initial) {
	var length = arr.length;
	if(length > 1)
		return reduce(arr.slice(1, length), fn, fn(initial, arr[0]));
	return fn(initial, arr[0]);
}

module.exports = reduce;
