# sum-by

[![Build Status](https://img.shields.io/travis/queicherius/sum-by.svg?style=flat-square)](https://travis-ci.org/queicherius/sum-by)
[![Coverage Status](https://img.shields.io/codecov/c/github/queicherius/sum-by/master.svg?style=flat-square)](https://codecov.io/github/queicherius/sum-by) [![Greenkeeper badge](https://badges.greenkeeper.io/queicherius/sum-by.svg)](https://greenkeeper.io/)

> Sum the elements of an array with an optional iteratee function

## Install

```bash
npm install sum-by
```

This module can be used for Node.js as well as browsers using [Browserify](https://github.com/substack/browserify-handbook#how-node_modules-works).

## Usage

```js
const _sum = require('sum-by')

_sum([1, 2, 3])
// => 6

_sum([1, undefined, 3])
// => 4

_sum([{foo: 1}, {foo: 2}, {foo: 3}], (x) => x.foo)
// => 6

_sum([{foo: 1}, {bar: 2}, {foo: 3}], (x) => x.bar)
// => 2

_sum([{foo: 1}, {bar: 2}, {foo: 3}], (x) => x.herp)
// => 0
```

## Tests

```bash
npm test
```

## Benchmark

```bash
npm run benchmark
```

|                       | Size (uglify + gzip) | Performance        | Performance (with iteratee) |
|-----------------------|----------------------|--------------------|-----------------------------|
| sum-by                | 148 bytes            | 56,339,337 ops/sec | 31,280,534 ops/sec           |
| lodash.sumby          | 5,233 bytes          | 53,324,787 ops/sec | 16,245,337 ops/sec           |

## Licence

MIT
