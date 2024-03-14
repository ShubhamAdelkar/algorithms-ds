// Pure Recursion

function collectOddValues(arr) {
  let newArr = [];

  // if length is zero return that array.
  if (arr.length == 0) return newArr;

  // if its not even, push in new array.
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  // recursion
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6]));
