/* exported capitalize */
/*
[x] create and empty string for output storage
[x] character at location 0 should always be upppercased
[x] every other character should be lowercased
[x] push new characters into output string
[x] return output
*/

function capitalize(word) {
  var output = '';
  output += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    output += word[i].toLowerCase();
  }
  return output;
}
