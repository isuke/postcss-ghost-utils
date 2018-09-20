module.exports = (decl, args) => {
  const size = args[0]

  decl.replaceWith(
    {
      prop: 'margin-left',
      value: size,
      source: decl.source,
    },
    {
      prop: 'margin-right',
      value: size,
      source: decl.source,
    }
  )
}
