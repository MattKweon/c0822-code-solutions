var $span = document.querySelectorAll('span');

var count = 0;
function keyPressed(event) {
  var str = 'grumpy wizards make toxic brew';
  if (event.key === str[count]) {
    $span[count].className = 'letter green';
    if (count < $span.length - 1) {
      $span[count + 1].className = 'letter underline';
    }
    count++;
  } else {
    $span[count].className = 'letter underline-red red';
  }
}
document.addEventListener('keydown', keyPressed);
