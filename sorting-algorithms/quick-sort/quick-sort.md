# Quick Sort

Quick Sort is a sorting algorithm that uses the "divide and conquer" approach. It works by selecting a pivot element from the array and partitioning the array around that pivot.

## Pivot Pseudocode

1. accept three arguments: an array, a start index and end index.
2. grab the pivot from the start of the array.
3. store the current pivot index in a variable.
4. loop through the array from the start until the end. if the pivot is greator than the current element, increament the pivot index variable and then swap the current element with the element at the pivot index.
5. swap the starting element with pivot index.
6. return the pivot index.

## Quick Sort Pseudocode

1. call the pivot helper on the array.
2. recursively call the pivot helper on the subarray to the left of that pivot index, and the subarray to the right of that index.
3. your base case for recursive call occurs when you consider a subarray with less than 2 elements.
4. finally, return the array which is sorted.
