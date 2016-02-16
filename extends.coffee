module.exports = (BaseClass) ->
    return class NewClass extends BaseClass
        constructor: (greeting, name) ->
            super(greeting or 'hello')
            @name = name
