/* exported takeRight */
/*
[x] create empty array for output
[x] if array length is less that given count, return array
[x] if not
[x] loop through the input array
[x] set the initialization at the value of array length minus count
[x] push each element into output array
[x] return output
*/

function takeRight(array, count) {
  if (array.length < count) {
    return array;
  }
  var output = [];
  for (var i = array.length - count; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
