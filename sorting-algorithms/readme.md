# Sorting Algorithms

Sorting algorithms are fundamental tools in computer science used to arrange a collection of data items in a specific order, typically based on a comparison operator.

### Choosing a Sorting Algorithm:

The best sorting algorithm for your specific scenario depends on factors like:

1. `Data size:` How many elements need to be sorted?
2. `Data type:` Numbers, strings, custom objects?
3. `Nearly sorted data:` Is the data already partially sorted, which can affect performance for some algorithms?
4. `Time complexity:` How much time (number of operations) does the algorithm take to sort the data (average, worst-case, best-case)?
5. `Space complexity:` How much additional memory does the algorithm require?

### Common Sorting Algorithms:

1. **`Bubble Sort:`**
   Repeatedly iterates through the list, compares adjacent elements, and swaps them if they are in the wrong order.
   Simple to implement but inefficient for large datasets (average and worst-case time complexity: O(n^2)).

2. **`Selection Sort:`**
   Finds the minimum (or maximum) element in the unsorted portion of the list and swaps it with the first element.
   Slightly more efficient than bubble sort (average time complexity: O(n^2), worst-case: O(n^2)).

3. **`Insertion Sort:`**
   Iterates through the list, inserting each element into its correct position in the sorted part of the list.
   Efficient for small datasets or nearly sorted data (average time complexity: O(n^2), best-case: O(n)).

4. **`Merge Sort:`**
   Divide-and-conquer algorithm. Recursively divides the list into halves, sorts each half independently, and then merges the sorted halves into a single sorted list.
   Efficient on average for large datasets (average and worst-case time complexity: O(n log n)).

5. **`Quick Sort:`**
   Another divide-and-conquer algorithm. Chooses a pivot element, partitions the list around the pivot such that elements less than the pivot are on its left and elements greater than the pivot are on its right. Then, recursively sorts the left and right partitions.
   Generally faster than merge sort on average for large datasets (average time complexity: O(n log n), but worst-case: O(n^2) in specific scenarios).

6. **`Radix Sort:`**
   Sorts data by individual digits (or characters for strings). Repeatedly passes through the data, sorting based on the least significant digit (LSD) or most significant digit (MSD) in each pass.
   Efficient for certain data types like integers or strings (time complexity varies depending on data size and number of digits).
