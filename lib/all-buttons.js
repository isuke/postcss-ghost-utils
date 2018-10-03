module.exports = (decl, args) => {
  const selectors = ['button', "[type='button']", "[type='reset']", "[type='submit']"]
  const pseudoClass = args[0]

  const selectorsWithPseudoClass = pseudoClass
    ? selectors.map((selector) => {
        return `${selector}:${pseudoClass}`
      })
    : selectors

  decl.replaceWith({
    selector: selectorsWithPseudoClass.join(', '),
    nodes: decl.nodes,
    raws: { semicolon: true },
  })
}
