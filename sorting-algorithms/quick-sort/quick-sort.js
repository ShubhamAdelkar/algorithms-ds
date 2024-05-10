function pivot(array, start = 0, end = array.length - 1) {
  // swap function
  const swap = (array, idx1, idx2) =>
    ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);

  const pivot = array[start]; // pivot at start
  let swapIndex = start; // swapindex at zero

  // looping over an array
  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
      // console.log(array);
    }
  }
  swap(array, start, swapIndex);
  // console.log(array);
  return swapIndex;
}

// quick sort implementation
function QuickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right); // pivot index form pivot()
    QuickSort(array, left, pivotIndex - 1); // left
    QuickSort(array, pivotIndex + 1, right); // right
  }
  return array;
}

console.log(QuickSort([1, 34, 5, 6, 4, 3, 55, 7, -2]));
