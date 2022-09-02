/* exported getKeys */
/*
[x] create empty array as storage for output
[x] loop through each property of the object
[x] add property name into output storage
[x] return output
*/

function getKeys(object) {
  var output = [];
  for (var key in object) {
    output.push(key);
  }
  return output;
}
