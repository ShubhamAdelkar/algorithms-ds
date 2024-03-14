function factorial(num) {
  if (num === 1) return 1; // base case with return.
  return num * factorial(num - 1); // calling function.
}
console.log(`your given number's factorial is ` + factorial(4));
