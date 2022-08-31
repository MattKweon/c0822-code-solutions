/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  var underFive = number < 5;
  return underFive;
}

function isEven(number) {
  var evenNum = number % 2;
  if (evenNum === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  var firstLetter = (string[0] === 'j') || (string[0] === 'J');
  return firstLetter;
}

function isOldEnoughToDrink(person) {
  var over21 = person.age >= 21;
  return over21;
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } if (pH >= 0 && pH < 7) {
    return 'acid';
  } if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  } if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody';
  }
}
