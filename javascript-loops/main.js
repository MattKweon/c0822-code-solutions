/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var number = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    number.push(currentNumber);
    currentNumber++;
  }
  return number;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    count++;
    repeated += word;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (const name in object) {
    keys.push(name);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (const val in object) {
    values.push(object[val]);
  }
  return values;
}
