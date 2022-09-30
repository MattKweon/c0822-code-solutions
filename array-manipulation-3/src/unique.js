/* exported unique */
/*
[x] create a output variable and assign it the first item of the given array
[x] check to see if the given array length is 0, if so return the input array
[x] create a loop starting at the item at location 1
[x] check to see if the output variable already has the individual element in it
[x] if not do nothing
[x] if so add the element to the output variable
[x] return output
*/

function unique(array) {
  if (!array.length) {
    return array;
  }
  var output = [array[0]];
  for (var i = 1; i < array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}
