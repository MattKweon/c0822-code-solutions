/* exported flatten */
/*
[x] create an empty array for the output
[x] loop through the input array
[x] if the value of the element at index i isn't an array, push it into the
   output variable
[x] if it is, create another loop through that array
[x] push the value at each index into the output variable
[x] return output
*/

function flatten(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      output.push(array[i]);
    } else {
      for (var j = 0; j < array[i].length; j++) {
        output.push(array[i][j]);
      }
    }
  }
  return output;
}
