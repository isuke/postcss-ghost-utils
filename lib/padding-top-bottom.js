module.exports = (decl, args) => {
  const size = args[0]

  decl.replaceWith(
    {
      prop: 'padding-top',
      value: size,
      source: decl.source,
    },
    {
      prop: 'padding-bottom',
      value: size,
      source: decl.source,
    }
  )
}
