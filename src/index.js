export default function (array, iteratee) {
  // Exit out if the array is not existent
  if (!array || array.length === 0) {
    return 0
  }

  // Make sure the default iteratee function just returns the value
  iteratee = iteratee || identity

  // Sum up all non-undefined values (in case the iteratee function returns undefined)
  let sum = 0

  for (let i = 0; i !== array.length; i++) {
    let value = iteratee(array[i])

    if (value !== undefined) {
      sum += value
    }
  }

  return sum
}

function identity (value) {
  return value
}
