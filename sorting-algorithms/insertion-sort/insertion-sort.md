# Insertion Sort 👈🏻

Insertion sort is a sorting algorithm that works in a similar way to how you might sort playing cards in your hand. It iterates through the unsorted portion of the array, picking up each element and inserting it into its correct position in the already-sorted portion.

## Psuedocode

1. **Start with the first element**: Consider the first element as sorted for now.
2. **Iterate through the unsorted portion:** Loop through the remaining elements of the array starting from the second element.
3. **Pick up the current element:** Select the current element you're iterating on.
4. **Shift sorted elements:** Compare the current element with the elements in the sorted portion (on the left side). If the current element is less than (or greater than for descending order) the element you're comparing with, shift the larger element one position to the right.
5. **Insert the current element:** Once you find the correct position (either the first element of the sorted portion or after an element that's smaller), insert the current element into that position.
6. **Repeat:** Continue iterating through the unsorted portion, picking up elements and inserting them into their correct positions.

## Code explanation

1. **insertionSort(arr) function:** This function takes an array arr as input and returns the sorted array.
2. **Outer loop (for i):** Iterates through the array from index 1 to arr.length - 1. The first element is already considered sorted.
3. **\*\*current = arr[i]:** Selects the current element being processed.
4. **j = i - 1:** Initializes j to the index before the current element, marking the beginning of the sorted portion.
5. **Inner loop (while j >= 0): **This loop iterates as long as j is within the bounds of the array and the element at arr[j] is greater than the current element.
6. **\*\*arr[j + 1] = arr[j]:** Shifts the larger element from the sorted portion one position to the right.
   j--: Decrements j to compare with the previous element in the sorted portion.
7. **arr[j + 1] = current:** Once the loop exits, j points to the correct position for the current element. It's inserted there.
8. **Return sorted array:** After the outer loop completes, the entire array is sorted, and the function returns the sorted arr.
