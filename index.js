#!/usr/bin/env node

const healthi = require('healthi')

healthi()
  .then(battery => {
    const health = battery.health.toFixed(2)
    console.log(`${health}%`)
  })
  .catch(console.log)
