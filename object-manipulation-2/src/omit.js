/* exported omit */
/*
[x] create empty object for output
[x] loop through the given object
[x] check to see if the keys array includes the key name
[x] if not add the key value pair to the output array
[x] return output
*/

function omit(source, keys) {
  var output = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      output[key] = source[key];
    }
  }
  return output;
}
