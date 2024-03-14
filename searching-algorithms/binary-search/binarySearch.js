const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
const value = "California";

// Standard Binary Search (Optimized).
function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let median = Math.floor((left + right) / 2);
    if (array[median] === value) {
      return median; // Return the index of the found value
    } else if (array[median] < value) {
      left = median + 1; // Search in the right half
    } else {
      right = median - 1; // Search in the left half
    }
  }
  return -1; // Return -1 if the value is not found
}

console.log(binarySearch(states, value));
console.log(binarySearch(["Hello", "hii", "meaow", "median"], "hii"));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9));

// More optimize solution.
function search(nums, target) {
  let st = 0;
  let end = nums.length - 1;

  while (st <= end) {
    const mid = ~~((end - st) / 2) + st;
    const num = nums[mid];

    if (num === target) return mid;
    num > target ? (end = mid - 1) : (st = mid + 1);
  }

  return -1;
}

console.log("Optimized " + search(states, value));
