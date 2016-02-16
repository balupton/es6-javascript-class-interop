module.exports = ->
	return class BaseClass
		constructor: (greeting) ->
			@greeting = greeting || 'hi'
