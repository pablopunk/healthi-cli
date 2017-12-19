const test = require('ava').serial
const { shellSync } = require('execa')

const exe = shellSync

test('returns a value greater than 0', async t => {
  const { stdout, stderr } = exe(`./index.js`, { cwd: __dirname })
  const result = parseFloat(stdout.trim())
  t.falsy(stderr)
  t.true(result > 0.0)
})

test('ends with %', async t => {
  const { stdout, stderr } = exe(`./index.js`, { cwd: __dirname })
  const result = stdout.trim()[stdout.length - 1]
  t.falsy(stderr)
  t.is(result, '%')
})

test('has two decimals', async t => {
  const { stdout, stderr } = exe(`./index.js`, { cwd: __dirname })
  const decimals = stdout.trim().split('%')[0].split('.')[1]
  t.falsy(stderr)
  t.is(decimals.length, 2)
})
