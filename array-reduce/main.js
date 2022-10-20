const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const isSum = (previousVal, currentVal) => {
  return previousVal + currentVal;
};

const sum = numbers.reduce(isSum);
console.log('sum:', sum);

const multiply = numbers.reduce((previousVal, currentVal) => {
  return previousVal * currentVal;
});
console.log('multipy:', multiply);

const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const isBalance = function (previousVal, currentVal) {
  if (currentVal.type === 'deposit') {
    return add(previousVal, currentVal.amount);
  }
  if (currentVal.type === 'withdrawal') {
    return subtract(previousVal, currentVal.amount);
  }
}
;

const balance = account.reduce(isBalance, 0);
console.log('balance:', balance);

const composite = traits.reduce((previousVal, currentVal) => {
  for (const key in currentVal) {
    previousVal[key] = currentVal[key];
  }
  return previousVal;
}, {});
console.log('composite:', composite);
