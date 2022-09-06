/* exported isVowel */
/*
[x] create variable for 'aeiouAEIOU'
[x] use includes method check if input charcter is in the variable
[x] return boolean value
*/

function isVowel(char) {
  var vowels = 'aeiouAEIOU';
  if (vowels.includes(char)) {
    return true;
  } else {
    return false;
  }
}
