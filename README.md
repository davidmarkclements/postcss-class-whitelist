# postcss-class-whitelist

Remove any class selector not in a provided whitelist

## Usage

Require `postcss-class-whitelist`, pass it an options object
with a classes array and pass the instance into `postcss`:

```js
postcss(whitelist({classes: ['my', 'allowed', 'classes']})).process(css)
```

## Example

```js
var postcss = require('postcss')
var whitelist = require('postcss-class-whitelist')

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
```

## License

* MIT

## Acknowledgements

* Sponsored by [nearForm](http://nearform.com)