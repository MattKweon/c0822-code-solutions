// var count = 1;
// var $img = document.querySelectorAll('img');
// var $dot = document.querySelectorAll('[data-dot]');
// var nextImageId = null;

// function nextImage() {
//   if (count < 5) {
//     console.log(count);
//     $img[count].className = '';
//     $dot[count].className = 'fa-solid fa-square';
//     for (var i = 0; i < $img.length; i++) {
//       if (count !== i) {
//         $img[i].className = 'hidden';
//         $dot[i].className = 'fa-light fa-square';
//       }
//     }
//     count++;
//   } else {
//     count = 0;
//     clearInterval(nextImageId);
//   }
// }
// nextImagId = setInterval(nextImage, 3000);

// var $buttonLeft = document.querySelector('[data-button="left"]');
// var $buttonRight = document.querySelector('[data-button="right"]');

// function newImage(event) {
//   clearInterval(nextImageId);
//   console.log('button clicked');
//   console.log(count);
//   if (count === 4) {
//     count = 0;
//     $img[4].className = 'hidden';
//     $dot[4].className = 'fa-light fa-square';
//     $img[0].className = '';
//     $dot[0].classname = 'fa-solid fa-square';
//   } else {
//     $img[count + 1].className = '';
//     $dot[count + 1].className = 'fa-solid fa-square';
//   }
// }

// $buttonRight.addEventListener('click', newImage);
