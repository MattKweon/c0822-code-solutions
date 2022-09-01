/* exported getIndexes */

/*
[x] create storage for output array
[x] determine the length of input array and subtract by 1
[x] push length number into output array
[x] subtract length of input array by one and push that to the start of the
input array
[x] return output
*/

function getIndexes(array) {
  var output = [];
  var arrayLen = array.length - 1;
  for (var i = arrayLen; i >= 0; i--) {
    output.splice(0, 0, i);
  }
  return output;
}
