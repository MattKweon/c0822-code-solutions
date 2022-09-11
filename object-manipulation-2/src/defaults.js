/* exported defaults */
/*
[x] loop throught the given source object
[x] if the name of the source property is undefined in the target object:
   add the key value pair to the given target object
*/

function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) { target[key] = source[key]; }
  }
}
