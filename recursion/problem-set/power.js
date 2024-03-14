/* Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents. */

function power(base, exponent) {
  // using ternary operator
  return exponent === 0 ? 1 : base * power(base, exponent - 1);
}

console.log(power(2, 3));

// visualization
/* 

power(2, 3)           = 2 * power(2, 2)
  |                           |
  |                           |
  V                           V
power(2, 2)           = 2 * power(2, 1)
  |                           |
  |                           |
  V                           V
power(2, 1)           = 2 * power(2, 0)
  |                           |
  |                           |
  V                           V
power(2, 0)           = 1 (base case)
  |                           |
  V                           V
Result: 8                 Result: 1

*/
