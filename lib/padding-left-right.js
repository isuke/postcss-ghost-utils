module.exports = (decl, args) => {
  const size = args[0]

  decl.replaceWith(
    {
      prop: 'padding-left',
      value: size,
      source: decl.source,
    },
    {
      prop: 'padding-right',
      value: size,
      source: decl.source,
    }
  )
}
