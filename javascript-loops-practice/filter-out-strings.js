/* exported filterOutStrings */

/*
[x] create empty array for output storage
[x] iterate through each index of the input array
[x] check to see if the value is a string or not
[x] if not, push the value of the string at index into output storage
[x] return output
*/

function filterOutStrings(values) {
  var output = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      output.push(values[i]);
    }
  }
  return output;
}
