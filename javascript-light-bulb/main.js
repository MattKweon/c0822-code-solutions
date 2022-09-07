var $container = document.querySelector('.container');
var $lightSwitch = document.querySelector('.light-switch');

function lightSwitchFlicks() {
  if ($container.className === 'container off') {
    $container.className = 'container on';
    $lightSwitch.className = 'light-switch on';
  } else {
    $container.className = 'container off';
    $lightSwitch.className = 'light-switch off';
  }
}
$lightSwitch.addEventListener('click', lightSwitchFlicks);
