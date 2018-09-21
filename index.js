const postcss = require('postcss')

const borderBottomRadius = require('./lib/border-bottom-radius')
const borderLeftRadius = require('./lib/border-left-radius')
const borderLeftRight = require('./lib/border-left-right')
const borderRightRadius = require('./lib/border-right-radius')
const borderTopBottom = require('./lib/border-top-bottom')
const borderTopRadius = require('./lib/border-top-radius')
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
      case 'border-top-radius':
        borderTopRadius(util, args)
        break
      case 'border-bottom-radius':
        borderBottomRadius(util, args)
        break
      case 'border-left-radius':
        borderLeftRadius(util, args)
        break
      case 'border-right-radius':
        borderRightRadius(util, args)
        break
      default:
        // TODO: implement error handling
        break
    }
  })
})
