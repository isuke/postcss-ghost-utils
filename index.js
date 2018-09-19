const postcss = require('postcss')

const fontSizeLineHeight = require('./lib/font-size-line-height')

module.exports = postcss.plugin('postcss-ghost-utils', (_opts) => (root, _result) => {
  root.walkAtRules('ghost', (util) => {
    const name = util.params.split(/\(/, 1)[0].trim()
    const args = util.params.replace(new RegExp(`^${name}\\((.+)\\)`), '$1').split(/\s*,\s*/)

    fontSizeLineHeight(util, args)
  })
})
