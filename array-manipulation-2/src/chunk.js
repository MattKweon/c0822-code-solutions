/* exported chunk */
/*
[x] create empty array for output
[x] create emputy array for sub arrays
[x] if array length is less than given size, return array
[x] if not, loop through the given array
[x] make another loop and set the conditon to i < size
[x]
*/

function chunk(array, size) {
  var output = [];
  var subArray = [];
  if (array.length < size) {
    return array;
  }
  for (var i = 0; i < array.length; i += size) {
    for (var j = i; j < i + size; j++) {
      if (j >= array.length) {
        break;
      }
      subArray.push(array[j]);
    }
    output.push(subArray);
    subArray = [];
  }
  return output;
}
