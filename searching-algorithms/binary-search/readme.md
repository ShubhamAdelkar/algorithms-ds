# Binary Search Algorithm

Binary search is a highly efficient searching algorithm used to find a target value within a sorted collection of elements. It works by repeatedly dividing the search interval in half until the target element is found or the interval is empty. Binary search is significantly faster than linear search for large collections because it eliminates half of the remaining elements in each step of the search process.

## Here's how binary search works

1. Start with a sorted collection: Binary search requires the collection to be sorted in ascending order. If the collection is not sorted, it needs to be sorted first.

2. Set the search interval: Initially, the search interval includes the entire collection.

3. Find the middle element: Calculate the midpoint of the search interval.

4. Compare with the target element:
If the middle element is equal to the target element, the search is successful, and the index of the middle element is returned.
If the middle element is greater than the target element, the search continues in the left half of the search interval.
If the middle element is less than the target element, the search continues in the right half of the search interval.

5. Update the search interval: Repeat the process with the new search interval (either the left or right half).

6. Repeat until found or interval is empty: Continue dividing the search interval in half and comparing the middle element with the target element until the target element is found or the interval is empty.

**`Binary search has a time complexity of O(log n), where n is the number of elements in the collection. This logarithmic time complexity means that binary search can quickly locate elements even in very large collections.`**
