/* 
productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

// recursion solution
function productOfArray(array) {
  if (array.length === 0) return 1;
  return array[0] * productOfArray(array.slice(1));
}
console.log("With Recursion " + productOfArray([1, 2, 3, 4, 5, 6]));

// neive solution
function productOfArray(array) {
  if (array.length === 0) return 1;
  let arrayProduct = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) return 1;
    arrayProduct *= array[i];
  }
  return arrayProduct;
}

console.log(productOfArray([1, 2, 3, 4, 5, 6]));
