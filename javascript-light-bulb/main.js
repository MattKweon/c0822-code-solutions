var $container = document.querySelector('.container');
var $lightSwitch = document.querySelector('.light-switch');
var count = 0;
function lightSwitchFlicks() {
  count++;
  if (count % 2 !== 0) {
    $container.className = 'container on';
    $lightSwitch.className = 'light-switch on';
  } else {
    $container.className = 'container off';
    $lightSwitch.className = 'light-switch off';
  }
}
$lightSwitch.addEventListener('click', lightSwitchFlicks);
