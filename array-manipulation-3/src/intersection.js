/* exported intersection */
/*
[] create output variable and assign it an empty string
[] loop through the first array
[] check if each element exists in the second array
[] if so, add that element into the output variable
[] return output
*/

function intersection(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      output.push(first[i]);
    }
  }
  return output;
}
