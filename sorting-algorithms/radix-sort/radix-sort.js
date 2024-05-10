// radix sort helper functions first
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; // get digit from the base
}

function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1; // count the digits from a number
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i])); // get most digit number from the list
  }
  return maxDigits;
}

// radix sort implementation last
function RadixSort(array) {
  let maxDigitsCount = mostDigits(array);
  // looping 0 - (maxlength: digit number eg.4)
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []); // creating digit bucket 0-9 [[]*10]
    // looping every digit in number
    for (let i = 0; i < array.length; i++) {
      let digit = getDigit(array[i], k); // getting digit from the base
      digitBucket[digit].push(array[i]); // pushing numbers in respective digit bucket
    }
    array = [].concat(...digitBucket); // modifing an array of sorted numbers
  }
  return array;
}

console.log(RadixSort([22, 334, 4, -2, 44, 3763, 4, 1, 62]));
