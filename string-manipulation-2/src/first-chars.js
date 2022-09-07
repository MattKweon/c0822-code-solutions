/* exported firstChars */
/*
[x] create variable for output
[x] slice the input string from 0 to the given length location
[x] assign that new string to the output variable
[x] return output
*/

function firstChars(length, string) {
  var output = string.slice(0, length);
  return output;
}
