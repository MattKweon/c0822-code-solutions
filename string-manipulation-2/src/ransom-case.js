/* exported ransomCase */
/*
[x] create empty string to store output
[x] loop through string to get each character of the string
[x] lower case all characters at even numbered locations
[x] add lower cased character to output string
[x] upper case all characters at odd numberd locations
[x] add upper cased characters to output string
[x] return string
*/

function ransomCase(string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      output += string[i].toLowerCase();
    } else {
      output += string[i].toUpperCase();
    }
  }
  return output;
}
