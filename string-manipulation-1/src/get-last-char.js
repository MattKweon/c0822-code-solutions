/* exported getLastChar */
/*
[x] find the length of the input string by using length method
[x] subtract the length by 1 to get the location at the last index
[x] return the character at the last index
 */

function getLastChar(string) {
  var i = string.length - 1;
  return string[i];
}
