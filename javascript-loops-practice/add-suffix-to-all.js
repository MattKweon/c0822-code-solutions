/* exported addSuffixToAll */

/*
[x] create an empty array for output storage
[x] pull each item from input array by indexing at every location
[x] add suffix to each item and push into output storage
[x] return output
*/

function addSuffixToAll(words, suffix) {
  var output = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    output.push(newWord);
  }
  return output;
}
