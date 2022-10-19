const takeAChance = require('./take-a-chance');

const myPromise = takeAChance('matt');

myPromise.then(response => {
  console.log(response);
});

myPromise.catch(error => {
  console.log(error.message);
});
