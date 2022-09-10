/* exported omit */
/*
[] create empty object for output
[] loop through the given object
[] loop through the keys array
[] compare the property name of the object to the key name
[] also compare to see if the value of the object property is defined or not
[] if not true, add the key pair value to the output object
[] return output
*/

function omit(source, keys) {
  var output = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== key && source[key] !== undefined) {
        output[key] = source[key];
      }
    }
  }
  return output;
}
// console.log(omit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']));
