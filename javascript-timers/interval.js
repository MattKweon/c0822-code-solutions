var count = 4;
var countdownId = null;
var $countdownDisplay = document.querySelector('.countdown-display');

function countdown() {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowwwwww Us~';
    clearInterval(countdownId);
  }
}

countdownId = setInterval(countdown, 1000);
