# Selection sort

Selection sort is a sorting algorithm that works by repeatedly finding the minimum (or maximum) element in the unsorted portion of the array and swapping it with the first element of that unsorted portion. This process continues until the entire array is sorted.

## Psuedocode

1. Start with the first element: Consider the first element as the minimum (or maximum) element for now.
2. Iterate through the unsorted portion: Loop through the remaining elements of the array starting from the second element.
3. Compare and find the minimum (or maximum): If the current element is less than (or greater than, for descending order) the element considered as the minimum (or maximum), update the index of the minimum (or maximum) element.
4. Swap the minimum (or maximum) element: Once the loop completes, swap the element at the index considered as the minimum (or maximum) with the first element of the unsorted portion.
5. Repeat: Increase the size of the sorted portion by 1 and repeat steps 2-4 until the entire array is sorted.
