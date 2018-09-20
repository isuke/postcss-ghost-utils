module.exports = (decl, args) => {
  const styles = args[0]

  decl.replaceWith(
    {
      prop: 'border-left',
      value: styles,
      source: decl.source,
    },
    {
      prop: 'border-right',
      value: styles,
      source: decl.source,
    }
  )
}
