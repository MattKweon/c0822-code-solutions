/* exported pick */
/*
[] create empty object for output
[] loop through the given object
[]
*/

// function pick(source, keys) {
//   var output = {};
//   for (var key in source) {
//     for (var i = 0; i < keys.length; i++) {
//       if (keys[i] === key && source[key] !== undefined) {
//         output[key] = source[key];
//       }
//     }
//   }
//   return output;
// }

function pick(source, keys) {
  var output = Object.assign({}, source);
  for (var key in source) {
    if (!keys.includes(key) || source[key] === undefined) {
      delete output[key];
    }
  }
  return output;
}
