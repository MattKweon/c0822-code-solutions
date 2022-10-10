/* exported isAnagram */
/*
[x] loop through the first input string
[x] check if the character is included in the second given string
[x] if not, return false
[x] remove the character from second string
[x] loop through the remaining characters and check if character is included or not
[x] after full loop if secondString is an empty string, string of space, or string
   of two spaces, return true
*/

function isAnagram(firstString, secondString) {
  for (var i = 0; i < firstString.length; i++) {
    if (!secondString.includes(firstString[i])) {
      return false;
    }
    secondString = secondString.replace(firstString[i], '');
  }
  if (secondString === '' || secondString === ' ' || secondString === '  ') {
    return true;
  } else {
    return false;
  }
}

isAnagram('dormitory', 'dirty room');
