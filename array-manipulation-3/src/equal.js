/* exported equal */
/*
[x] check to see if the length of the two input arrays are equal to each other
[x] if not return false
[x] loop through the first array
[x] compare if the value of the element at index i is equal to the value
   of the second array at index i
[x] if not, return false
[x] if so, finising the loop until you have checked that all values of the
   first and second string are equal to each other, then return true
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
