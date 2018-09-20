const postcss = require('postcss')

const fontSizeLineHeight = require('./lib/font-size-line-height')
const marginTopBottom = require('./lib/margin-top-bottom')
const marginLeftRight = require('./lib/margin-left-right')
const paddingTopBottom = require('./lib/padding-top-bottom')
const paddingLeftRight = require('./lib/padding-left-right')

module.exports = postcss.plugin('postcss-ghost-utils', (_opts) => (root, _result) => {
  root.walkAtRules('ghost', (util) => {
    const name = util.params.split(/\(/, 1)[0].trim()
    const args = util.params.replace(new RegExp(`^${name}\\((.+)\\)`), '$1').split(/\s*,\s*/)

    switch (name) {
      case 'font-size-line-height':
        fontSizeLineHeight(util, args)
        break
      case 'margin-top-bottom':
        marginTopBottom(util, args)
        break
      case 'margin-left-right':
        marginLeftRight(util, args)
        break
      case 'padding-top-bottom':
        paddingTopBottom(util, args)
        break
      case 'padding-left-right':
        paddingLeftRight(util, args)
        break
      default:
        // TODO: implement error handling
        break
    }
  })
})
