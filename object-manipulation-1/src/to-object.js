/* exported toObject */
/*
[x] create an empty object for output storage
[x] take value at location 0 and set the empty object using bracket notation
[x] set the value of that to the value of the input string at location 1
[x] return the output object
*/

function toObject(keyValuePair) {
  var output = {};
  output[keyValuePair[0]] = keyValuePair[1];
  return output;
}
