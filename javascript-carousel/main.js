var count = 1;
var $img = document.querySelectorAll('img');
var $dot = document.querySelectorAll('[data-dot]');
var nextImageId = null;

function nextImage() {
  if (count === 5) {
    count = 0;
  }
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
  nextImageId = setInterval(nextImage, 3000);

}
$buttonLeft.addEventListener('click', changeLeft);

var $dotContainer = document.querySelector('.dot-container');

function changeImgAt(event) {
  clearInterval(nextImageId);
  if (event.target === $dot[0]) {
    if (count === 0) {
      $img[0].className = '';
      $dot[0].className = 'fa-solid fa-square';
      $img[4].className = 'hidden';
      $dot[4].className = 'fa-light fa-square';
    } else {
      $img[0].className = '';
      $dot[0].className = 'fa-solid fa-square';
      $img[count - 1].className = 'hidden';
      $dot[count - 1].className = 'fa-light fa-square';
    }
    count = 1;
  }
  if (event.target === $dot[1]) {
    if (count === 0) {
      $img[1].className = '';
      $dot[1].className = 'fa-solid fa-square';
      $img[0].className = 'hidden';
      $dot[0].className = 'fa-light fa-square';
      $img[4].className = 'hidden';
      $dot[4].className = 'fa-light fa-square';
    } else {
      $img[1].className = '';
      $dot[1].className = 'fa-solid fa-square';
      $img[count - 1].className = 'hidden';
      $dot[count - 1].className = 'fa-light fa-square';
    }
    count = 2;
  } if (event.target === $dot[2]) {
    if (count === 0) {
      $img[2].className = '';
      $dot[2].className = 'fa-solid fa-square';
      $img[4].className = 'hidden';
      $dot[4].className = 'fa-light fa-square';
    } else {
      $img[2].className = '';
      $dot[2].className = 'fa-solid fa-square';
      $img[count - 1].className = 'hidden';
      $dot[count - 1].className = 'fa-light fa-square';
    }
    count = 3;
  }
  if (event.target === $dot[3]) {
    if (count === 0) {
      $img[3].className = '';
      $dot[3].className = 'fa-solid fa-square';
      $img[4].className = 'hidden';
      $dot[4].className = 'fa-light fa-square';
    } else {
      $img[3].className = '';
      $dot[3].className = 'fa-solid fa-square';
      $img[count - 1].className = 'hidden';
      $dot[count - 1].className = 'fa-light fa-square';
    }
    count = 4;
  }
  if (event.target === $dot[4]) {
    if (count === 0) {
      $img[4].className = '';
      $dot[4].className = 'fa-solid fa-square';
      // $img[4].className = 'hidden';
      // $dot[4].className = 'fa-light fa-square';
    } else {
      $img[4].className = '';
      $dot[4].className = 'fa-solid fa-square';
      $img[count - 1].className = 'hidden';
      $dot[count - 1].className = 'fa-light fa-square';
      count = 5;
    }
  }
  nextImageId = setInterval(nextImage, 3000);
}

$dotContainer.addEventListener('click', changeImgAt);
