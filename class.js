module.exports = function () {
	return function BaseClass (greeting) {
		this.greeting = greeting || 'hi'
	}
}
