module.exports = (decl, _args) => {
  decl.replaceWith(
    {
      prop: 'white-space',
      value: 'pre-wrap',
      source: decl.source,
    },
    {
      prop: 'word-wrap',
      value: 'break-word',
      source: decl.source,
    }
  )
}
