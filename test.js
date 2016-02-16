'use strict'

const equal = require('assert-helpers').equal

function check (K, E) {
	const k = K()
	const e = E(k)
	const i = new e(null, 'ben')
	equal(i instanceof k, true, 'instanceof of k')
	equal(i instanceof e, true, 'instanceof of e')
	equal(i.greeting, 'hello', 'greeting')
	equal(i.name, 'ben', 'name')
}

const types = {
	es5: {
		klass: require('./class.js'),
		extends: require('./extends.js')
	},
	es6: {
		klass: require('./class.es'),
		extends: require('./extends.es')
	},
	coffee: {
		klass: require('./class.coffee'),
		extends: require('./extends.coffee')
	}
}

const combinations = []

require('joe').suite('classes interop', function(suite, test) {
	this.setConfig({onError: 'ignore'})

	for ( const typeA in types ) {
		for ( const typeB in types ) {
			test(`${typeA} extending ${typeB}`, function () {
				check(
					types[typeB].klass,
					types[typeA].extends
				)
			})
		}
	}

})
