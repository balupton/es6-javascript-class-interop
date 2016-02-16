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
```
