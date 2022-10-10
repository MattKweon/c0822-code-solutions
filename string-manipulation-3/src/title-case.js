/* exported titleCase */
/*
[x] create an empty string and assign to the output variable
[x] check to see if the first word is 'javascript', 'javascript:', or 'api'; if so return
   the proper casing of these words
[x] else add the result of the expression of capitalizing the first letter of the word and lower
   case the remaing letters
[x] loop through the remaing words besides the last word
[x] check to see if the word is 'javascript', 'javascript:', or 'api'; if so return
   the proper casing of these words
[x] check to see of the word has a colon, if so captialize the word that follows the colon
[x] check to see if the word is a 'minor' word, if so lowercase all the letters
[x] check to see if the word has a hyphen in it
[x] if so captialize the word on both sides of the hyphen
[x] if not just capitalize the first letter and lower case the rest
[x] check to see if the last word is 'javascript', 'javascript:', or 'api'; if so return
   the proper casing of these words
[x] else capitlize the first letter and lower case the rest and add the word to the output variable
[x] return the output variable
*/

function titleCase(title) {
  var output = '';
  title = title.toLowerCase().split(' ');
  if (title[0] === 'javascript') {
    output += 'JavaScript' + ' ';
  } else if (title[0] === 'javascript:') {
    output += 'JavaScript:' + ' ';
  } else if (title[0] === 'api') {
    output += 'API' + ' ';
  } else {
    output += title[0][0].toUpperCase() + title[0].slice(1).toLowerCase() + ' ';
  }

  for (var i = 1; i < title.length - 1; i++) {
    if (title[i] === 'javascript') {
      output += 'JavaScript' + ' ';
    } else if (title[i] === 'javascript:') {
      output += 'JavaScript:' + ' ';
    } else if (title[i] === 'api') {
      output += 'API' + ' ';
    } else if (title[i - 1][title[i - 1].length - 1] === ':') {
      output += title[i][0].toUpperCase() + title[i].slice(1).toLowerCase() + ' ';
    } else if (title[i] === 'and' || title[i] === 'or' || title[i] === 'nor' || title[i] === 'but' ||
      title[i] === 'a' || title[i] === 'an' || title[i] === 'the' || title[i] === 'as' || title[i] === 'at' ||
      title[i] === 'by' || title[i] === 'for' || title[i] === 'in' || title[i] === 'of' || title[i] === 'on' ||
      title[i] === 'per' || title[i] === 'to') {
      output += title[i].toLowerCase() + ' ';
    } else {
      if (title[i].includes('-')) {
        var hyphenedWord = title[i].split('-');
        output += hyphenedWord[0][0].toUpperCase() + hyphenedWord[0].slice(1).toLowerCase() +
        '-' + hyphenedWord[1][0].toUpperCase() + hyphenedWord[1].slice(1) + ' ';
      } else {
        output += title[i][0].toUpperCase() + title[i].slice(1).toLowerCase() + ' ';
      }
    }
  }
  if (title[title.length - 1] === 'javascript') {
    output += 'JavaScript';
  } else if (title[title.length - 1] === 'api') {
    output += 'API';
  } else {
    output += title[title.length - 1][0].toUpperCase() + title[title.length - 1].slice(1).toLowerCase();
  }
  return output;
}
