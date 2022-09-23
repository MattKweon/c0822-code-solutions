var count = 1;
var $img = document.querySelectorAll('img');
var $dot = document.querySelectorAll('[data-dot]');
var nextImageId = null;

function nextImage() {
  if (count < 5) {
    $img[count].className = '';
    $dot[count].className = 'fa-solid fa-square';
    for (var i = 0; i < $img.length; i++) {
      if (count !== i) {
        $img[i].className = 'hidden';
        $dot[i].className = 'fa-light fa-square';
      }
    }
    count++;
  } if (count === 5) {
    count = 0;
  }
}
nextImageId = setInterval(nextImage, 3000);

var $buttonLeft = document.querySelector('[data-button="left"]');
var $buttonRight = document.querySelector('[data-button="right"]');

function changeRight(event) {
  clearInterval(nextImageId);
  if (count === 0) {
    $img[0].className = 'hidden';
    $dot[0].className = 'fa-light fa-square';
    $img[1].className = '';
    $dot[1].className = 'fa-solid fa-square';
    count++;
  }
  if (count < 5) {
    $img[count - 1].className = 'hidden';
    $dot[count - 1].className = 'fa-light fa-square';
    $img[count].className = '';
    $dot[count].className = 'fa-solid fa-square';
    count++;
  } else if (count === 5) {
    $img[4].className = 'hidden';
    $dot[4].className = 'fa-light fa-square';
    $img[0].className = '';
    $dot[0].className = 'fa-solid fa-square';
    count = 0;
  }
  nextImageId = setInterval(nextImage, 3000);
}

$buttonRight.addEventListener('click', changeRight);

function changeLeft() {
  clearInterval(nextImageId);
  if (count === 0) {
    $img[0].className = 'hidden';
    $dot[0].className = 'fa-light fa-square';
    $img[4].className = '';
    $dot[4].className = 'fa-solid fa-square';
    count = 4;
  } else if (count < 5) {
    count--;
    $img[count + 1].className = 'hidden';
    $dot[count + 1].className = 'fa-light fa-square';
    $img[count].className = '';
    $dot[count].className = 'fa-solid fa-square';
  }
}
$buttonLeft.addEventListener('click', changeLeft);

var $dotContainer = document.querySelector('.dot-container');

function changeImgAt() {
}
$dotContainer.addEventListener('click', changeImgAt);
