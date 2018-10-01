const postcss = require('postcss')

const rules = [
  { name: 'all-buttons', func: require('./lib/all-buttons') },
  { name: 'border-bottom-radius', func: require('./lib/border-bottom-radius') },
  { name: 'border-left-radius', func: require('./lib/border-left-radius') },
  { name: 'border-left-right', func: require('./lib/border-left-right') },
  { name: 'border-right-radius', func: require('./lib/border-right-radius') },
  { name: 'border-top-bottom', func: require('./lib/border-top-bottom') },
  { name: 'border-top-radius', func: require('./lib/border-top-radius') },
  { name: 'circle', func: require('./lib/circle') },
  { name: 'font-size-line-height', func: require('./lib/font-size-line-height') },
  { name: 'margin-left-right', func: require('./lib/margin-left-right') },
  { name: 'margin-top-bottom', func: require('./lib/margin-top-bottom') },
  { name: 'new-line', func: require('./lib/new-line') },
  { name: 'padding-left-right', func: require('./lib/padding-left-right') },
  { name: 'padding-top-bottom', func: require('./lib/padding-top-bottom') },
  { name: 'size', func: require('./lib/size') },
  { name: 'truncate', func: require('./lib/truncate') },
]

module.exports = postcss.plugin('postcss-ghost-utils', (_opts) => (root, _result) => {
  root.walkAtRules('ghost', (util) => {
    const name = util.params.split(/\(/, 1)[0].trim()
    const match = util.params.match(new RegExp(`^${name}\\((.+)\\)`))
    const args = match ? match[1].split(/\s*,\s*/) : []

    const rule = rules.find((rule) => {
      return rule.name === name
    })

    if (rule) {
      rule.func(util, args)
    } else {
      throw util.error(`Unknown rule '${name}'`, { plugin: 'postcss-ghost-utils' })
    }
  })
})
