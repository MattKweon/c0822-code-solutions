/* exported capitalizeWords */
/*
[x] create empty string to store the output
[x] split up the string by each individual word and assign that to a variable
[x] capitalize the first letter of the first word in the array
[x] add that word to the output string
[x] loop to the new array and capitalize the first letter of every other word
[x] add that new string into output string
[x] return output
*/

function capitalizeWords(string) {
  var output = '';
  var eachWord = string.split(' ');
  var firstWord = eachWord[0][0].toUpperCase() + eachWord[0].slice(1).toLowerCase();
  output += firstWord;
  for (var i = 1; i < eachWord.length; i++) {
    var firstLetter = ' ';
    for (var j = 0; j < eachWord[i].length; j++) {
      if (j === 0) {
        firstLetter += eachWord[i][j].toUpperCase();
      } else {
        firstLetter += eachWord[i][j].toLowerCase();
      }
      output += firstLetter;
      firstLetter = '';
    }
  }
  return output;
}
