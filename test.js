const test = require('ava').serial
const { shellSync } = require('execa')

const exe = shellSync

test('returns a value between 0 and 100', async t => {
  const { stdout } = exe(`./index.js`, { cwd: __dirname })
  const result = parseFloat(stdout.trim())
  t.true(result > 0.0)
  t.true(result <= 100.0)
})

test('ends with %', async t => {
  const { stdout } = exe(`./index.js`, { cwd: __dirname })
  const result = stdout.trim()[stdout.length - 1]
  t.is(result, '%')
})

test('has two decimals', async t => {
  const { stdout } = exe(`./index.js`, { cwd: __dirname })
  const decimals = stdout.trim().split('%')[0].split('.')[1]
  t.is(decimals.length, 2)
})
