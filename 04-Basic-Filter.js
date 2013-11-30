module.exports = function getShortMessages(messages) {
	
	return messages.map(function(value) {
		return value.message;
	}).filter(function(value) {
		return value.length < 50;
	});
}
