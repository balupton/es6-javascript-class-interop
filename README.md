# JavaScript and CoffeeScript Classes Interopability

## Get the results

1. clone the repo
2. `npm install`
3. `npm test`

## What do the results say?

Turns out CoffeeScript v1.10 cannot extend native JavaScript/ES6+ classes.

```
coffeescript vs javascript classes
coffeescript vs javascript classes ➞  javascript extending javascript
coffeescript vs javascript classes ➞  javascript extending javascript ✔
coffeescript vs javascript classes ➞  coffeescript extending coffeescript
coffeescript vs javascript classes ➞  coffeescript extending coffeescript ✔
coffeescript vs javascript classes ➞  javascript extending coffeescript
coffeescript vs javascript classes ➞  javascript extending coffeescript ✔
coffeescript vs javascript classes ➞  coffeescript extending javascript
coffeescript vs javascript classes ➞  coffeescript extending javascript ✘
coffeescript vs javascript classes ✘

FAILURE: 3/4 tests ran successfully; 1 failed, 0 incomplete, 1 errors

Error #1:
coffeescript vs javascript classes ➞  coffeescript extending javascript
TypeError: Class constructors cannot be invoked without 'new'
    at NewClass.BaseClass (class.js:3:3)
    at new NewClass (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/extends.coffee:11:40)
    at EventEmitterGrouped.<anonymous> (test.js:41:13)
    at ambi (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/ambi/out/lib/ambi.js:57:27)
    at Domain.fireMethod (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/taskgroup/out/lib/taskgroup.js:385:23)
    at Domain.run (domain.js:228:14)
    at EventEmitterGrouped.Task.fire (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/taskgroup/out/lib/taskgroup.js:423:27)
    at Immediate._onImmediate (/Users/balupton/Projects/active/classes-coffeescript-vs-javascript/node_modules/taskgroup/out/lib/taskgroup.js:440:26)
    at processImmediate [as _immediateCallback] (timers.js:383:17)

npm ERR! Test failed.  See above for more details.

```
