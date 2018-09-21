const postcss = require('postcss')

const borderLeftRight = require('./lib/border-left-right')
const borderTopBottom = require('./lib/border-top-bottom')
const fontSizeLineHeight = require('./lib/font-size-line-height')
const marginLeftRight = require('./lib/margin-left-right')
const marginTopBottom = require('./lib/margin-top-bottom')
const paddingLeftRight = require('./lib/padding-left-right')
const paddingTopBottom = require('./lib/padding-top-bottom')
const size = require('./lib/size')

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
      case 'border-top-bottom':
        borderTopBottom(util, args)
        break
      case 'border-left-right':
        borderLeftRight(util, args)
        break
      case 'size':
        size(util, args)
        break
      default:
        // TODO: implement error handling
        break
    }
  })
})
