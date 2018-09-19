const fs = require('fs')
const os = require('os')
const postcss = require('postcss')
const test = require('ava')

const ghost = require('./')

const names = ['font-size-line-height']

const tmpDirPath = fs.mkdtempSync(`${os.tmpdir()}/postcss-ghost-utils-`)

names.forEach(async (name) => {
  test(name, (t) => {
    const input = fs.readFileSync(`test/${name}.css`, 'utf8')
    const output = fs.readFileSync(`test/${name}.expect.css`, 'utf8')

    return postcss([ghost({})])
      .process(input, { from: undefined })
      .then((result) => {
        fs.writeFileSync(`${tmpDirPath}/${name}.out.css`, result.css)
        t.deepEqual(result.css, output)
        t.deepEqual(result.warnings().length, 0)
      })
  })
})
