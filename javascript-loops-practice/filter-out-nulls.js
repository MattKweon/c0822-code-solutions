/* exported filterOutNulls */
/*
[x] create empty array for output storage
[x] interate through each index of the input array
[x] if value is null, do nothing
[x] else, push original value into output array
[x] return output
 */

function filterOutNulls(values) {
  var output = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      output.push(values[i]);
    }
  }
  return output;
}
