/* exported getWords */
/*
[x] create empty array for output storage
[x] loop through each index of input string
[x] create variable empty string to add letters to
[x] if index = character, add to variable
[x] if index = '', push varibale to output array
[x] push final variable into output array
[x] return output storage
*/

function getWords(string) {
  var output = [];
  var words = '';
  if (string === '') {
    return output;
  } else {
    for (var i = 0; i < string.length; i++) {
      if (string[i] !== ' ') {
        words += string[i];
      } else {
        output.push(words);
        words = '';
      }
    }
  }
  output.push(words);
  return output;
}
