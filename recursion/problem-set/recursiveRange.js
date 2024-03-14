/* 
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
*/

function recursiveRange(number) {
    if(number < 0) return 0;
  if (number === 1) return 1;
  return number + recursiveRange(number - 1);
}

console.log(recursiveRange(2));
