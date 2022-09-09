var $container = document.querySelector('.container');
var $lightSwitch = document.querySelector('.light-switch');
var lightSwitchPos = false;

function lightSwitchFlicks() {
  if (lightSwitchPos === false) {
    $container.className = 'container on';
    $lightSwitch.className = 'light-switch on';
    lightSwitchPos = true;
  } else {
    $container.className = 'container off';
    $lightSwitch.className = 'light-switch off';
    lightSwitchPos = false;
  }
}
$lightSwitch.addEventListener('click', lightSwitchFlicks);
