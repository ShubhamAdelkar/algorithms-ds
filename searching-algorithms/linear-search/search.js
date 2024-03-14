// Linear search, using includes() method.
function search(array, value) {
  if (array.length === 0) return null;
  for (let i = 0; i < array.length; i++) {
    return array.includes(value) ? array.indexOf(value) : -1;
  }
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 4));

// Linear search
function search(array, value) {
  if (array.length === 0) return null;
  for (let i = 0; i < array.length; i++) {
    return array[i] === value ? array.indexOf(value) : -1;
  }
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 4));
