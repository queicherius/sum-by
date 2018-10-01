// Load the benchmarking helper
const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

// Load the modules to compare
const lodash = require('lodash.sumby')
const mine = require('../src/index.js')

// Run the modules against each other
suite
  .add('lodash.sumby identity', function () {
    lodash([1, 2, Math.random()])
  })
  .add('sum-by identity', function () {
    mine([1, 2, Math.random()])
  })
  .add('lodash.sumby iteratee', function () {
    lodash([{ foo: 1 }, { foo: 2 }, { foo: Math.random() }], (x) => x.foo)
  })
  .add('sum-by iteratee', function () {
    mine([{ foo: 1 }, { foo: 2 }, { foo: Math.random() }], (x) => x.foo)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ 'async': true })
