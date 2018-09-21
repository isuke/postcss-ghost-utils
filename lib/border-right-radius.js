module.exports = (decl, args) => {
  const styles = args[0]

  decl.replaceWith(
    {
      prop: 'border-top-right-radius',
      value: styles,
      source: decl.source,
    },
    {
      prop: 'border-bottom-right-radius',
      value: styles,
      source: decl.source,
    }
  )
}
