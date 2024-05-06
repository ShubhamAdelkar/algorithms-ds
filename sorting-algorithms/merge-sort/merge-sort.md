# Merge Sort

Merge sort is a divide-and-conquer sorting algorithm that works by recursively breaking down a list into sub-lists containing a single element each (base case). Then, it merges these sub-lists in a way that preserves the sorted order (conquer step).

## Code

### merge function

- Takes two sorted arrays array1 and array2 as input.
- Initializes an empty result array result.
- Uses two pointers i and j to iterate through array1 and array2, respectively.
- Compares elements from both arrays:
  If array2[j] is greater than array1[i], push array1[i] to result and increment i.
  Otherwise, push array2[j] to result and increment j.
- After exhausting one array, it appends the remaining elements of the other array to result.
- Returns the merged and sorted result array.

### mergeSort function

- Base case: If the array has a length of 1 or less (already sorted), return the array.
- Recursive case:
- Calculate the middle index mid.
- Recursively call mergeSort on the left sub-array (array.slice(0, mid)).
- Recursively call mergeSort on the right sub-array (array.slice(mid)).
- This ensures both sub-arrays are sorted before merging.
