'use strict'

const equal = require('assert-helpers').equal

const coffeeClass = require('./class.coffee')
const coffeeExtends = require('./extends.coffee')
const jsClass = require('./class.js')
const jsExtends = require('./extends.js')

require('joe').suite('coffeescript vs javascript classes', function(suite, test) {
    test('javascript extending javascript', function () {
        const c = jsClass()
        const e = jsExtends(c)
		const i = new e(null, 'ben')
        equal(i instanceof c, true, 'instanceof of c')
        equal(i instanceof e, true, 'instanceof of e')
		equal(i.greeting, 'hello', 'greeting')
		equal(i.name, 'ben', 'name')
	})
    test('coffeescript extending coffeescript', function () {
        const c = coffeeClass()
        const e = coffeeExtends(c)
		const i = new e(null, 'ben')
        equal(i instanceof c, true, 'instanceof of c')
        equal(i instanceof e, true, 'instanceof of e')
		equal(i.greeting, 'hello', 'greeting')
		equal(i.name, 'ben', 'name')
	})
    test('javascript extending coffeescript', function () {
        const c = coffeeClass()
        const e = jsExtends(c)
		const i = new e(null, 'ben')
        equal(i instanceof c, true, 'instanceof of c')
        equal(i instanceof e, true, 'instanceof of e')
		equal(i.greeting, 'hello', 'greeting')
		equal(i.name, 'ben', 'name')
	})
    test('coffeescript extending javascript', function () {
        const c = jsClass()
        const e = coffeeExtends(c)
		const i = new e(null, 'ben')
        equal(i instanceof c, true, 'instanceof of c')
        equal(i instanceof e, true, 'instanceof of e')
		equal(i.greeting, 'hello', 'greeting')
		equal(i.name, 'ben', 'name')
	})
})
