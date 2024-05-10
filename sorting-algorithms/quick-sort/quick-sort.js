function pivot(arr, start = 0, end = arr.length - 1) {
  // swap function
  const swap = (array, idx1, idx2) =>
    ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);

  const pivot = arr[start]; // pivot at start
  let swapIndex = start; // swapindex at zero

  // looping over an array
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
      //   console.log(arr);
    }
  }
  return swapIndex;
}

console.log("index is " + pivot([4, 8, 2, 1, 5, 7, 6, 3]));
