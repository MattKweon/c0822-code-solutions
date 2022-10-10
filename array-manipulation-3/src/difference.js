/* exported difference */
/*
[x] create an empty array and assign it to the output variable
[x] loop through the first array
[x] check to see if each element is in the second array
[x] if so, add the element to the output array
[x] loop through the second array
[x] check if each element of the second array is in the first array
[x] if so, add the element into the output
[x] return output
*/

function difference(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      output.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      output.push(second[j]);
    }
  }
  return output;
}
