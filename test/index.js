var fs = require('fs')
var test = require('tap').test
var postcss = require('postcss')
var whitelist = require('../')

var input = fs.readFileSync(__dirname + '/fixtures/input.css', 'utf8')
var output = fs.readFileSync(__dirname + '/fixtures/output.css', 'utf8').trim()

test('removes classes not in whitelist', function (t) {
  var result = postcss(whitelist({
    classes: ['my', 'allowed', 'classes']
  })).process(input)
  t.deepEqual(result.css, output)
  t.end()
})

