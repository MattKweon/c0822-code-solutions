/* exported swapChars */
/*
[x] create empty string for output variable
[x] create varibale for character at firstIndex
[x] create variable for character at secondIndex
[x] create loop to index through each character
[x] if i is not equal to first or second index add that value to the output string
[x] if i is equal to first index add the character at second index to output string
[x] if i is equal to second index add the character at first index to output string
[x] return output
*/

function swapChars(firstIndex, secondIndex, string) {
  var output = '';
  var firstIndexChar = string[firstIndex];
  var secondIndexChar = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i !== firstIndex && i !== secondIndex) {
      output += string[i];
    } else if (i === firstIndex) {
      output += secondIndexChar;
    } else {
      output += firstIndexChar;
    }
  }
  return output;
}
