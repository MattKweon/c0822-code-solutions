/* exported findIndex */
/*
[x] iterate through each index of the input array
[x] determine if the value at that index is equal to the value input
[x] if equal return the index
[x] if not return -1
*/

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
