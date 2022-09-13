/* exported invert */
/*
[x] create empty object for output storage
[x] loop throught the given object
[x] name a new name of the property value and assign it the origial property name
[x] add that new key pair value to the output object
[x] return object
*/

function invert(source) {
  var output = {};
  for (var key in source) {
    output[source[key]] = key;
  }
  return output;
}
