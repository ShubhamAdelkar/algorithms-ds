// Linear search
function search(array, value) {
  if (array.length === 0) return 0;
  for (let i = 0; i < array.length; i++) {
    return array.includes(value) ? true : false;
  }
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 1));
