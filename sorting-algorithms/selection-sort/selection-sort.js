// selection sort
function selectionSort(array) {
  // swap function
  const swap = (array, idx1, idx2) =>
    ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[lowest] > array[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(array, i, lowest);
  }
  return array;
}

console.log(selectionSort([0, 33, 3, 6, 44, 88, -2, 55, 1]));
