/* exported compact */
/*
[x] create empty array for output storage
[x] loop through each element of the input array
[x] check to see if it is equal to any of the following:
    - false
    - null
    - NaN
    - 0 & -0
    - undefined
    - '' (empty string)
[x] if it has any of the following omit
[x] maintains the order of truthy elements
*/

function compact(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i] === false) {
      output.push(array[i]);
    }
  }
  return output;
}
