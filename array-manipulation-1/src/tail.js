/* exported tail */
/*
[x] create empty array for output storage
[x] loop through each element of the input array starting at location 1
[x] push the value of the element into output storage
[x] return output
*/

function tail(array) {
  var output = [];
  for (var i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
