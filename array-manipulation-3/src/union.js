/* exported union */
/*
[x] create an output variable and assign an empty array
[x] loop through the first array and add all the element to output
[x] loop through the second array
[x] check if the value of each element does not exist in the first array
[x] if not, add the element to the output variable
[x] return output
*/

function union(first, second) {
  var output = [];
  for (var j = 0; j < first.length; j++) {
    output.push(first[j]);
  }
  for (var i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      output.push(second[i]);
    }
  }
  return output;
}
