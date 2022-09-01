/* exported includesSeven */
/*
[x] iterate through each index of array
[x] if array item is strictly equal to 7 return true
[x] if not return false
*/

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
