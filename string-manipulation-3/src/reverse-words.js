/* exported reverseWords */
/*
[x] create an empty string and assign to the output variable
[x] create an empty string and assign to the wordReversed variable
[x] split the given string at every space to create an array of substrings for each word
[x] loop through the new array
[x] loop through each substring from the last character to the first
[x] add each character to the wordReversed variable
[x] add value of wordReversed concatinted with a string of space to output variable,
   unless the wordReversed is the last word in the array, then add the value of the
   variable without concatinating space
[x] reset the wordReversed varibable
[x] finish the loop and add the remaining reversed words to the output variable
[x] return output
*/

function reverseWords(string) {
  var output = '';
  var wordReversed = '';
  string = string.split(' ');

  for (var i = 0; i < string.length; i++) {
    for (var j = string[i].length - 1; j >= 0; j--) {
      wordReversed += string[i][j];
    }
    if (i === string.length - 1) {
      output += wordReversed;
    } else {
      output += wordReversed + ' ';
    }
    wordReversed = '';
  }
  return output;
}
