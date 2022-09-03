/* exported truncate */
/*
[x] create empty string to store output
[x] check if the value of length is bigger than the length of input string
[x] if so, return the input string concatenated with ellipsis
[x] loop through each index of the string until the input length - 1
[x] add each character to output string
[x] add ellipsis to the end of the output string
[x] return output
*/

function truncate(length, string) {
  var output = '';
  if (length >= string.length) {
    return string + '...';
  } else {
    for (var i = 0; i < length; i++) {
      output += string[i];
    }
  }
  output += '...';
  return output;
}
