/* eslint-env node, mocha */
import {expect} from 'chai'
import module from '../src/index.js'

describe('sum-by', () => {
  it('should get the sum of an empty or non-existing array', () => {
    expect(module([])).to.equal(0)
    expect(module(null)).to.equal(0)
    expect(module()).to.equal(0)
  })

  it('should get the sum of a basic array', () => {
    expect(module([1, 2, 3])).to.equal(6)
  })

  it('should get the sum of an array with an iteratee function', () => {
    expect(module([{foo: 1}, {foo: 2}, {foo: 3}], (x) => x.foo)).to.equal(6)
  })

  it('should get the sum of an array with undefined elements', () => {
    expect(module([null, undefined, 1, null, undefined, 2, 3])).to.equal(6)
    expect(module([undefined, 1, null, undefined, 2, 3])).to.equal(6)
    expect(module([{foo: 1}, {foo: 2}, {foo: 3}], (x) => x.bar)).to.equal(0)
  })
})
