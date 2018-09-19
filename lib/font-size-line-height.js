module.exports = (decl, args) => {
  const fontSize = args[0]
  const LineHeight = args[1]

  decl.replaceWith(
    {
      prop: 'font-size',
      value: fontSize,
      source: decl.source,
    },
    {
      prop: 'line-height',
      value: `calc(${fontSize} + ${LineHeight} * 2)`,
      source: decl.source,
    }
  )
}
