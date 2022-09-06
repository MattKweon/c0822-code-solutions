/* exported getValues */
/*
[x] create empty array for output storage
[x] loop through each property in the input object
[x] push the values of each property into storage array
[x] return output
*/

function getValues(object) {
  var output = [];
  for (var key in object) {
    output.push(object[key]);
  }
  return output;
}
