module.exports = (decl, args) => {
  const width = args[0]
  const height = args[1] ? args[1] : args[0]

  decl.replaceWith(
    {
      prop: 'width',
      value: width,
      source: decl.source,
    },
    {
      prop: 'height',
      value: height,
      source: decl.source,
    }
  )
}
