/* exported reverseWord */
/*
[x] create empty string for output storage
[x] loop through index of the string
[x] add that character to the beginning of the storage string
*/

function reverseWord(word) {
  var output = '';
  for (var i = 0; i < word.length; i++) {
    output = word[i] + output;
  }
  return output;
}
