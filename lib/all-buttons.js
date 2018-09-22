module.exports = (decl, _args) => {
  const selector = ['button', "[type='button']", "[type='reset']", "[type='submit']"].join(', ')

  decl.replaceWith({
    selector: selector,
    nodes: decl.nodes,
    raws: { semicolon: true },
  })
}
