/* exported take */
/*
[x] create empty array for output storage
[x] if count is greater than input array length, return array
[x] if not
[x] loop through the input array
[x] set the conditon at less than count
[x] push each element into output array
[x] return output
*/

function take(array, count) {
  var output = [];
  if (array.length < count) {
    return array;
  }
  for (var i = 0; i < count; i++) {
    output.push(array[i]);
  }
  return output;
}
