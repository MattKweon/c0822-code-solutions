/* exported zip */
/*
[x] create an empty array and assign it to a output variable
[x] create an empty array and assign it to a eachZip variable
[x] determine which input array is shorter and assign that to a variable
[x] create a loop starting at var i is equal to 0 and stop once it is less than
   the length of the shorter array
[x] push the value of the element at index i of the first array to the eachZip variable
[x] push the value of the element at index i of the second array to the eachZip variable
[x] push the value of eachZip to the output variable
[x] finish the loop and return output
*/

function zip(first, second) {
  var output = [];
  var eachZip = [];
  var shorterArray = Math.min(first.length, second.length);

  for (var i = 0; i < shorterArray; i++) {
    eachZip.push(first[i]);
    eachZip.push(second[i]);
    output.push(eachZip);
    eachZip = [];
  }
  return output;
}
