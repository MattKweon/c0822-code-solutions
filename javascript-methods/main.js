var numOne = 10;
var numTwo = 20;
var numThree = 30;
var maximunValue = Math.max(numOne, numTwo, numThree);
console.log('maximunValue:', maximunValue);

var heroes = ['Ironman', 'Thor', 'Spiderman', 'Hulk'];
var randomNumber = Math.random(heroes);
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'JK Rowling'
  },
  {
    title: 'Harry Potter and the Prisoner and Azkeban',
    author: 'JK Rowling'
  },
  {
    title: 'Harry Potter and the Goblet of Fire',
    author: 'JK Rowling'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Matthew Kweon';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
