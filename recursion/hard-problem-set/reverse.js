function reverse(string) {
  // Base case: if the string is empty, return an empty string
  if (string.length === 0) {
    return "";
  }
  // Recursive case: return the last character of the string followed by the reversed substring
  return string[string.length - 1] + reverse(string.slice(0, -1));
}

console.log(reverse("awesome")); // Output: 'emosewa'
console.log(reverse("rithmschool")); // Output: 'loohcsmhtir'


// Visualization, lol.

/*
// Initial call: reverse('awesome')
// __-- recursive call: reverse('awesom')
// ____-- recursive call: reverse('aweso')
// ______-- recursive call: reverse('awes')
// ________-- recursive call: reverse('awe')
// __________-- recursive call: reverse('aw')
// ____________-- recursive call: reverse('a')
// ____________// Base case reached: return ''
// ____________// Unwinding recursion: returning 'a' to the previous call
// ____________// Concatenating 'a' with the result of the previous call ('w')
// ____________// Result of reverse('aw') is 'wa'
// __________// Unwinding recursion: returning 'wa' to the previous call
// __________// Concatenating 'wa' with the result of the previous call ('e')
// __________// Result of reverse('awe') is 'ewa'
// ________// Unwinding recursion: returning 'ewa' to the previous call
// ________// Concatenating 'ewa' with the result of the previous call ('s')
// ________// Result of reverse('awes') is 'eswa'
// ______// Unwinding recursion: returning 'eswa' to the previous call
// ______// Concatenating 'eswa' with the result of the previous call ('o')
// ______// Result of reverse('aweso') is 'owesa'
// ____// Unwinding recursion: returning 'owesa' to the previous call
// ____// Concatenating 'owesa' with the result of the previous call ('m')
// ____// Result of reverse('awesom') is 'mosewa'
// // Unwinding recursion: returning 'mosewa' to the initial call
// // Concatenating 'mosewa' with the result of the initial call ('e')
// // Result of reverse('awesome') is 'emosewa'
*/
