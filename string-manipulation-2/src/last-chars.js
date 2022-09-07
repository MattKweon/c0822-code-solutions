/* exported lastChars */
/*
[x] if value of length is greater than the length of the input string
   return string
[x] if not, set a variable for output
[x] substract string length by the given length value
[x] slice the input string from that value to the end
[x] assign that value to output variable
[x] return output
*/

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  } else {
    var output = string.slice(string.length - length);
    return output;
  }
}
