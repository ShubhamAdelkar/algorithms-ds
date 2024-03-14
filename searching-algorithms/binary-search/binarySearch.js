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

// Standard Binary Search
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

// my solution, by my own.
function binarySearch(array, value) {
  if (array.length === 0) return null;
  let left = 0;
  let right = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    let median = Math.floor(left + right / 2);
    if (median > value) {
      right = median;
      if (array[i] === value) {
        return array.indexOf(value);
      }
    } else {
      left = right - 1;
      if (array[i] === value) {
        return array.indexOf(value);
      }
    }
  }

  return -1; // Return -1 if the value is not found
}

console.log("Me " + binarySearch(states, value));
console.log("Me " + binarySearch(["Hello", "hii", "meaow", "median"], "hii"));
console.log("Me " + binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9));
