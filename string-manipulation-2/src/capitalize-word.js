/* exported capitalizeWord */
/*
[x] determine if the input word is any variation of 'javascript'
[x] if so return 'JavaScript', if not,
[x] create empty string to store output
[x] capitalize the first character in the input string
[x] add that character output string
[x] remove the first character from the input string
[x] lower case the rest of the characters in the string
[x] add that string to the output string
[x] return output
*/

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    var output = '';
    output += word[0].toUpperCase();
    output += word.slice(1).toLowerCase();
    return output;
  }
}
