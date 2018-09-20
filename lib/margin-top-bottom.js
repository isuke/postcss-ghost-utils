module.exports = (decl, args) => {
  const size = args[0]

  decl.replaceWith(
    {
      prop: 'margin-top',
      value: size,
      source: decl.source,
    },
    {
      prop: 'margin-bottom',
      value: size,
      source: decl.source,
    }
  )
}
