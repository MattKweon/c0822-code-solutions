/* exported pick */
/*
[x] create empty object for output
[x] loop through the given object
[x] loop through the keys array
[x] compare the property name of the object to the key name
[x] also compare to see if the value of the object property is defined or not
[x] if true, add the key pair value to the output object
[x] return output
*/

function pick(source, keys) {
  var output = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key && source[key] !== undefined) {
        output[key] = source[key];
      }
    }
  }
  return output;
}
