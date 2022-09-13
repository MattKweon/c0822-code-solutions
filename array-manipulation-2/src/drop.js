/* exported drop */
/*
[x] create empty array for output storage
[x] if array length is less than count, return array
[x] if not
[x] loop through the input array
[x] set the initialization to the value of count
[x] push each element into new output array
*/

function drop(array, count) {
  var output = [];
  if (array.length < count) {
    return array;
  }
  for (var i = count; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
