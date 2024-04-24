// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // Pick up the current element
    let j = i - 1; // Index for the sorted portion
    // Shift sorted elements to the right while the current element is smaller
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Shift the larger element to the right
      j--;
    }
    // Insert the current element at the correct position
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([1, 4, 2, 9, 33, -1, 3, 76, 5]));
