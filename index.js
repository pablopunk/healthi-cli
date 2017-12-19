#!/usr/bin/env node

const os = require('os')

if (os.platform() !== 'darwin') {
  throw new Error('Only Mac is supported for now.')
}

const healthi = require('healthi')

healthi()
  .then(battery => {
    const health = battery.health.toFixed(2)
    console.log(`${health}%`)
  })
  .catch(console.log)
