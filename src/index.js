module.exports = function (array, iteratee) {
  // Exit out if the array is not existent
  if (!array || array.length === 0) {
    return 0
  }

  // Make sure the default iteratee function just returns the value
  if (!iteratee) {
    return sumBy(array, identity)
  }

  return sumBy(array, iteratee)
}

function sumBy (array, iteratee) {
  // Sum up all truthy values (in case the iteratee function returns undefined)
  let sum = 0

  for (let i = 0; i !== array.length; i++) {
    sum += iteratee(array[i]) || 0
  }

  return sum
}

function identity (value) {
  return value
}
