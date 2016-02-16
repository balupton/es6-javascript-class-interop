module.exports = function (BaseClass) {
	return class NewClass extends BaseClass {
		constructor (greeting, name) {
			super(greeting || 'hello')
			this.name = name
		}
	}
}
