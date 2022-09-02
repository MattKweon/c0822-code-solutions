/* exported countdown */

/* pseudocode:
[x] create storage for output (empty array)
[x] push input into array storage
[x] subtract input by 1
[x] check if new number is greater than or equal to 0
[x] push new input into array storage
[x] return array with numbers counting down from initial input
*/

function countdown(number) {
  var output = [];
  output.push(number);
  for (var i = number - 1; i >= 0; i--) {
    output.push(i);
  }
  return output;
}
