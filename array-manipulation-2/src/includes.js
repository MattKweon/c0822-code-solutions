/* exported includes */
/*
[x] loop through the input array
[x] check each element to see if it is equal to the given value
[x] if so return true
[x] if not return false
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
