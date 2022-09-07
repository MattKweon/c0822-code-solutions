/* exported numVowels */
/*
[x] set the an output variable to the number 0
[x] loop through the new string
[x] figure out in each character is equal to a vowel
[x] if so, increment the output varibale by 1
[x] if not, do nothing
[x] return the output
*/

function numVowels(string) {
  var output = 0;
  for (var i = 0; i < string.length; i++) {
    if ('aeiouAEIOU'.includes(string[i])) {
      output++;
    }
  }
  return output;
}
