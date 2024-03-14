/*
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

function fib(number) {
  if (number <= 0) return 0;
  if (number <= 2) return 1;
  return fib(number - 1) + fib(number - 2);
}

console.log(fib(4)); // Output: 3
console.log(fib(10)); // Output: 55
console.log(fib(28)); // Output: 317811
console.log(fib(35)); // Output: 9227465
