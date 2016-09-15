var postcss = require('postcss')

module.exports = postcss.plugin('postcss-class-whitelist', function (options) {
  return function  (css) {
    if (!options.classes) return
    var classes = options.classes.map(function (c) {
      return c[0] === '.' ? c : '.' + c
    })

    css.walkRules(function (rule) {
      var selectors = rule.selectors
      var filtered = selectors.filter(function (s) {
        return s[0] !== '.' || ~classes.indexOf(s)
      })

      if (filtered.length > 1) {
        rule.selector = filtered.join(', ')
        return
      }
      
      if (filtered.length === 1) {
        rule.selector = filtered[0].trim()
        return
      } 

      rule.remove()
    })
  }
})
