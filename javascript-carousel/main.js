var count = 1;
var $img = document.querySelectorAll('img');
var $dot = document.querySelectorAll('[data-dot]');

function nextImage() {
  if (count < 5) {
    $img[count].className = '';
    $dot[count].className = 'dot fa-solid fa-square';
    for (var i = 0; i < $img.length; i++) {
      if (count !== i) {
        $img[i].className = 'hidden';
        $dot[i].className = 'dot fa-light fa-square';
      }
    }
    count++;
  } else {
    count = 0;
  }
}
setInterval(nextImage, 3000);
