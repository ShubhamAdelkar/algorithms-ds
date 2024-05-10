# Radix Sort

Radix sort is special sorting algorithm that works on lists of numbers. it never makes comparisons between numbers. it exploits the fact that information about the size of number of digits. more digit means more number.

## Radix Sort Helpers

inorder to implement radix sort, its helpful to build a few helper function first:

### 1. getDigit(num, place) - returns the digit in num at the given base value

```code
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

getDigit(1234,1);  // 3
getDigit(1234,2);  // 2
getDigit(1234,3);  // 1
getDigit(1234,0);  // 4

```

### 2. digitCount(num) - return the number of digits in num

```code
function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

digitCount(2345);  // 4
digitCount(45);  // 2
digitCount(23425);  // 5
```

### 3. mostDigits(nums) - given an array of numbers, returns the number of digits in the largest numbers in the list

```code
function mostDigits(nums) {
    let  maxDigits = 0;
    for(let i = 0;i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

mostDigits([3,4,444,33,22222,33,22]));  // 5
```

## Radix Sort Pseudocode

- define a function that accepts lists of numbers
- figure out how many digits the largest numbers has.
- loop from k = 0 up to this largest numbers if digits
- for each iteration of loop:
  - create bucket for each digit(0 to 9)
  - place each number in the corresponding bucket based on its kth digit
- Replace our existing array with values in our buckets, starting with 0 & going up to 9
- return list at the end!
