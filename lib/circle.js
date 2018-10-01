module.exports = (decl, args) => {
  const size = args[0]

  decl.replaceWith(
    {
      prop: 'width',
      value: size,
      source: decl.source,
    },
    {
      prop: 'height',
      value: size,
      source: decl.source,
    },
    {
      prop: 'border-radius',
      value: '50%',
      source: decl.source,
    }
  )
}
