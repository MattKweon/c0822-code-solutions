/* exported zip */
/*
[x] create an empty array and assign it to a output variable
[x] create an empty array and assign it to a eachZip variable
[x] write a contional to check which array is longer and create two pathways for
   the next lines of code
[x] start by loop through the shorter array
[x] push the value of the element at index i from the shorter array into the
   eachZip variable
[x] push the value of the element at indexc i from the other array into the
   eachZip variable
[x] push the value of eachZip into the output
[x] clear the eachZip variable
[x] finish looping through the first array
[x] return output
*/

function zip(first, second) {
  var output = [];
  var eachZip = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      eachZip.push(first[i]);
      eachZip.push(second[i]);
      output.push(eachZip);
      eachZip = [];
    }
  } else {
    for (var j = 0; j < second.length; j++) {
      eachZip.push(first[j]);
      eachZip.push(second[j]);
      output.push(eachZip);
      eachZip = [];
    }
  }
  return output;
}
