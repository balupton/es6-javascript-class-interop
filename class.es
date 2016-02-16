module.exports = function () {
	return class BaseClass {
		constructor (greeting) {
			this.greeting = greeting || 'hi'
		}
	}
}
