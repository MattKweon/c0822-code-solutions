/* exported initial */
/*
[x] create empty array for storage output
[x] determine the location of the second to last index of input array
[x] loop through the input array starting at the second to last index
[x] push the value of the index to the beginning of output array using unshift
[x] return output
*/

function initial(array) {
  var output = [];
  for (var i = array.length - 2; i >= 0; i--) {
    output.unshift(array[i]);
  }
  return output;
}
