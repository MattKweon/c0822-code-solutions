/* exported reverse */
/*
[x] create empty array for output storage
[x] loop through each element of the input array
[x] add the value of each element to the beginnng of the new array using unshift
[x] return the output
*/

function reverse(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    output.unshift(array[i]);
  }
  return output;
}
