const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);

let result;

if (process.argv[3] === 'plus') {
  result = add(num1, num2);
}
if (process.argv[3] === 'minus') {
  result = subtract(num1, num2);
}
if (process.argv[3] === 'time') {
  result = multiply(num1, num2);
}
if (process.argv[3] === 'over') {
  result = divide(num1, num2);
}

console.log('result:', result);
