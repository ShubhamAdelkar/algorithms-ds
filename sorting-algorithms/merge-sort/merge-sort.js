function merge(array1, array2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array2[j] > array1[i]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }
  return result;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(mergeSort(left), mergeSort(right)); // Return merged result
}

console.log(
  mergeSort([33, 55, 2, 3, 1, 77, 88, 100, 200, 0, 70, 8, 99, 33, 56, 82, 48])
);
