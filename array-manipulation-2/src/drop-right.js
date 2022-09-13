/* exported dropRight */
/*
[x] create empty array for output
[x] if array length is less than given count value, return array
[x] if not
[x] loop through the input array
[x] set the conditon to i less than array length minus count
[x] push each element into the output array
[x] return output
*/

function dropRight(array, count) {
  var output = [];
  if (array.length < count) {
    return array;
  }
  for (var i = 0; i < array.length - count; i++) {
    output.push(array[i]);
  }
  return output;
}
