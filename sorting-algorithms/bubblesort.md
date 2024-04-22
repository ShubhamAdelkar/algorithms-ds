# Bubble Sort🫧

Imagine bubbles rising to the surface of water. Bubble sort works similarly with elements in an array. It repeatedly iterates through the array, compares adjacent elements, and swaps them if they are in the wrong order. Larger elements, like bubbles, eventually "bubble up" to the end of the array.

## Steps

1. Iterate through the array: Start at the beginning of the array.
2. Compare adjacent elements: Compare the current element with the element next to it.
3. Swap elements (if needed): If the current element is larger than the next element, swap their positions in the array.
4. Repeat: Continue iterating through the array, comparing and swapping elements until you reach the end.
5. Reduced passes: Since the largest element has likely bubbled up in the previous pass, you can reduce the number of elements to compare in subsequent passes.

## Example -

Let's sort the array [5, 1, 4, 2, 8]:

Pass 1:
Compare 5 and 1: Swap them ([1, 5, 4, 2, 8]).
Compare 5 and 4: No swap needed.
Compare 4 and 2: Swap them ([1, 5, 2, 4, 8]).
Compare 2 and 8: No swap needed.

Pass 2:
Since the last element (8) is likely in place, compare up to the second-last element (4).
Compare 5 and 2: No swap needed.
Compare 2 and 4: No swap needed.

Pass 3:
Again, reduce the comparison since the largest elements are likely positioned.
Compare 5 and 2: No swap needed.
After three passes, the array is sorted: [1, 2, 4, 5, 8].

Complexity
Time complexity: Bubble sort has a time complexity of O(n^2) in the average and worst cases. This means the sorting time increases significantly as the number of elements (n) grows.
Space complexity: Bubble sort is relatively space-efficient, with a space complexity of O(1) as it only uses a constant amount of additional space.
