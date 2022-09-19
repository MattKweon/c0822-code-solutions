/* exported isPalindromic */
/*
[x] create an empty string for the reverse of the input string
[x] loop through the input string:
   [x] set up loop with initialization at the location of the last character
   [x] condition is greater than or equal to zero
   [x] decrememt the variable i by 1
   [x] if indexed value is not equal to space:
      [x] add the value of the input string at index i to the new reverse variable
      [x] else, skip the space and add the character at the next index, add a space,
         and assign the value of that expression to the reverse variable
[x] compare the value of the reverse variable to the input string
[x] if same, return true
[x] if not, return false
*/

function isPalindromic(string) {
  var reverse = '';
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      reverse += string[i];
    } else {
      reverse += string[i - 1] + ' ';
      i--;
    }
  }
  if (string === reverse) {
    return true;
  }
  return false;
}
