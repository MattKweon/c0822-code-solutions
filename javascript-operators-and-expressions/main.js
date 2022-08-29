var width = 10;
var height = 5;
var area = width * height;

var bill = 20;
var payment = 15;
var change = bill - payment;

var quizzes = 80;
var midterm = 90;
var final = 100;
var grade = (quizzes + midterm + final) / 3;

var firstName = 'Matthew ';
var lastName = 'Kweon';
var fullName = firstName + lastName;

var ph = 9;
var isAcidic = ph < 7;

var headCount = 250;
var isSparta = headCount === 300;

var motto = fullName;
motto += ' is the GOAT';

console.log('value of area:', area);
console.log('typeof area:', typeof area);

console.log('value of change:', change);
console.log('typeof change:', typeof change);

console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
