/* exported sumAll */
/*
[x] initialize output variable setting it equal to 0
[x] get value of items at every index
[x] add those values to the output variable
[x] return output variable
*/

function sumAll(numbers) {
  var output = 0;
  for (var i = 0; i < numbers.length; i++) {
    output += numbers[i];
  }
  return output;
}
