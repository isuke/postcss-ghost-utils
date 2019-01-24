module.exports = (decl, args) => {
  const duration = args[0]
  const timing = args[1]
  const properties = args.slice(2)

  decl.replaceWith({
    prop: 'transition',
    value: properties.map((property) => `${duration} ${timing} ${property}`).join(', '),
    source: decl.source,
  })
}
