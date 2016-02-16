module.exports = function (BaseClass) {
	function NewClass (greeting, name) {
	    BaseClass.call(this, greeting || 'hello')
		this.name = name
	}
	NewClass.prototype = Object.create(BaseClass.prototype)
	return NewClass
}
