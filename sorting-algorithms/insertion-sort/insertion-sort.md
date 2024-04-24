# Insertion Sort 👈🏻

Insertion sort is a sorting algorithm that works in a similar way to how you might sort playing cards in your hand. It iterates through the unsorted portion of the array, picking up each element and inserting it into its correct position in the already-sorted portion.

## Psuedocode

1. Start with the first element: Consider the first element as sorted for now.
2. Iterate through the unsorted portion: Loop through the remaining elements of the array starting from the second element.
3. Pick up the current element: Select the current element you're iterating on.
4. Shift sorted elements: Compare the current element with the elements in the sorted portion (on the left side). If the current element is less than (or greater than for descending order) the element you're comparing with, shift the larger element one position to the right.
5. Insert the current element: Once you find the correct position (either the first element of the sorted portion or after an element that's smaller), insert the current element into that position.
6. Repeat: Continue iterating through the unsorted portion, picking up elements and inserting them into their correct positions.
