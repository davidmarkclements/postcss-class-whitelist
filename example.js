var postcss = require('postcss')
var whitelist = require('./')
var css = `
  .my, .allowed { font-size: 12px; }
  .classes { background: blue; }
  .classes h1 { background: red; }
  .should-disappear { color: blue; }
`

var result = postcss(whitelist({
  classes: ['my', 'allowed', 'classes']
})).process(css)

console.log(result.css)