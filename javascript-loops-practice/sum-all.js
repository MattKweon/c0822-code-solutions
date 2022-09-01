/* exported sumAll */
/*
[] initialize output variable setting it equal to 0
[] get value of items at every index
[] add those values to the output variable
[] return output variable
*/

function sumAll(numbers) {
  var output = 0;
  for (var i = 0; i < numbers.length; i++) {
    output += numbers[i];
  }
  return output;
}
