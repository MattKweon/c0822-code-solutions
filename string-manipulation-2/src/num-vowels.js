/* exported numVowels */
/*
[] set the an output variable to the number 0
[] lower case all characters in input string
[] loop through the new string
[] figure out in each character is equal to a vowel
[] if so, increment the output varibale by 1
[] if not, do nothing
[] return the output
*/

function numVowels(string) {
  var output = 0;
  string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if ('aeiou'.includes(string[i])) {
      output++;
    }
  }
  return output;
}
