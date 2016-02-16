# JavaScript and CoffeeScript Classes Interopability

## Get the results

1. clone the repo
2. `npm install`
3. `npm test`

## What do the results say?

- ES6 classes can extend ES5 and CoffeeScript classes
- CoffeeScript can extend ES5 classes, but CoffeeScript cannot extend ES6 classes
- ES5 can extend CoffeeScript classes, but ES5 cannot extend ES6 classes

```
classes interop
classes interop ➞  es5 extending es5
classes interop ➞  es5 extending es5 ✔
classes interop ➞  es5 extending es6
classes interop ➞  es5 extending es6 ✘
classes interop ➞  es5 extending coffee
classes interop ➞  es5 extending coffee ✔
classes interop ➞  es6 extending es5
classes interop ➞  es6 extending es5 ✔
classes interop ➞  es6 extending es6
classes interop ➞  es6 extending es6 ✔
classes interop ➞  es6 extending coffee
classes interop ➞  es6 extending coffee ✔
classes interop ➞  coffee extending es5
classes interop ➞  coffee extending es5 ✔
classes interop ➞  coffee extending es6
classes interop ➞  coffee extending es6 ✘
classes interop ➞  coffee extending coffee
classes interop ➞  coffee extending coffee ✔
classes interop ✔

FAILURE: 7/9 tests ran successfully; 2 failed, 0 incomplete, 2 errors

Error #1:
classes interop ➞  es5 extending es6
TypeError: Class constructors cannot be invoked without 'new'
    at new BaseClass (class.es:3:3)
    at BaseClass.NewClass (extends.js:3:16)
    at check (test.js:8:12)
    at EventEmitterGrouped.<anonymous> (test.js:38:5)
    at ambi (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/ambi/out/lib/ambi.js:57:27)
    at Domain.fireMethod (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/taskgroup/out/lib/taskgroup.js:385:23)
    at Domain.run (domain.js:228:14)
    at EventEmitterGrouped.Task.fire (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/taskgroup/out/lib/taskgroup.js:423:27)
    at Immediate._onImmediate (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/taskgroup/out/lib/taskgroup.js:440:26)
    at processImmediate [as _immediateCallback] (timers.js:383:17)

Error #2:
classes interop ➞  coffee extending es6
TypeError: Class constructors cannot be invoked without 'new'
    at NewClass.BaseClass (class.es:3:3)
    at new NewClass (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/extends.coffee:11:40)
    at check (test.js:8:12)
    at EventEmitterGrouped.<anonymous> (test.js:38:5)
    at ambi (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/ambi/out/lib/ambi.js:57:27)
    at Domain.fireMethod (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/taskgroup/out/lib/taskgroup.js:385:23)
    at Domain.run (domain.js:228:14)
    at EventEmitterGrouped.Task.fire (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/taskgroup/out/lib/taskgroup.js:423:27)
    at Immediate._onImmediate (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/taskgroup/out/lib/taskgroup.js:440:26)
    at processImmediate [as _immediateCallback] (timers.js:383:17)

npm ERR! Test failed.  See above for more details.
```
