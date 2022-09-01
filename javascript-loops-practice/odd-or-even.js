/* exported oddOrEven */
/*
[] create an empty array to store the output
[] iterate through each index of the array of numbers
[] determine if the number is even or odd
[] if even push string value of 'even' into storage array
[] if odd push string value of 'odd' into storage arrray
*/

function oddOrEven(numbers) {
  var output = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      output.push('even');
    } else {
      output.push('odd');
    }
  }
  return output;
}
