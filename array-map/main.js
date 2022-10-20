const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const isDoubled = x => {
  return x * 2;
};

const double = numbers.map(isDoubled);
console.log('double:', double);

const toPrices = x => {
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(x);
};

const prices = numbers.map(toPrices);
console.log('prices:', prices);

const toUpperCase = str => {
  return str.toUpperCase();
};

const upperCased = languages.map(toUpperCase);
console.log('upperCased:', upperCased);

const isFirstLetter = str => {
  return str[0];
};

const firstLetters = languages.map(isFirstLetter);
console.log('firstLetters:', firstLetters);
