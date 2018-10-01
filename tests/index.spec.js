/* eslint-env jest */
const _sum = require('../src/index.js')

describe('sum-by', () => {
  it('should get the sum of an empty or non-existing array', () => {
    expect(_sum([])).toEqual(0)
    expect(_sum(null)).toEqual(0)
    expect(_sum()).toEqual(0)
  })

  it('should get the sum of a basic array', () => {
    expect(_sum([1, 2, 3, 0])).toEqual(6)
  })

  it('should get the sum of an array with an iteratee function', () => {
    expect(_sum([{ foo: 1 }, { foo: 2 }, { foo: 3 }], (x) => x.foo)).toEqual(6)
  })

  it('should get the sum of an array with undefined elements', () => {
    expect(_sum([null, undefined, 1, null, undefined, 2, 3])).toEqual(6)
    expect(_sum([undefined, 1, null, undefined, 2, 3])).toEqual(6)
    expect(_sum([{ foo: 1 }, { foo: 2 }, { foo: 3 }], (x) => x.bar)).toEqual(0)
  })
})
