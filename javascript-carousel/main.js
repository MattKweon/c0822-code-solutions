var $imageNodeList = document.querySelectorAll('[data-id]');
var $iconNodeList = document.querySelectorAll('[data-dot]');
var $rightBtn = document.querySelector('[data-button="right"]');
var $leftBtn = document.querySelector('[data-button="left"]');
var intervalID = null;
var currentIndex = 0;

$rightBtn.addEventListener('click', function (e) {
  showNextIndex();
  showIndex(currentIndex);
});

$leftBtn.addEventListener('click', function (e) {
  showPreviousIndex();
  showIndex(currentIndex);
});

document.addEventListener('click', function (e) {
  clearInterval(intervalID);
  intervalID = setInterval(rotateImg, 3000);
  if (e.target.matches('[data-dot]')) {
    var switchTo = Number(e.target.getAttribute('data-dot'));
    currentIndex = switchTo;
    showIndex(currentIndex);
  }
});

function rotateImg() {
  showNextIndex();
  showIndex(currentIndex);
}

intervalID = setInterval(rotateImg, 3000);

function showIndex(newIndex) {
  for (var i = 0; i < 5; i++) {
    if (i !== newIndex) {
      $imageNodeList[i].classList.add('hidden');
      $iconNodeList[i].className = 'fa-light fa-square';
    } else {
      $imageNodeList[i].classList.remove('hidden');
      $iconNodeList[i].className = 'fa-solid fa-square';
    }
  }
}

function showNextIndex() {
  if (currentIndex === 4) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
}

function showPreviousIndex() {
  if (currentIndex === 0) {
    currentIndex = 4;
  } else {
    currentIndex--;
  }
}
