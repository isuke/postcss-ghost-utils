module.exports = (decl, args) => {
  const styles = args[0]

  decl.replaceWith(
    {
      prop: 'border-top',
      value: styles,
      source: decl.source,
    },
    {
      prop: 'border-bottom',
      value: styles,
      source: decl.source,
    }
  )
}
