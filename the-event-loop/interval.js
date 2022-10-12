let count = 3;
let intervalID = null;

intervalID = setInterval(() => {
  if (count) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}, 1000);
