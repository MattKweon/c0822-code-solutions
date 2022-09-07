var $container = document.querySelector('.container');
var $lightSwitch = document.querySelector('.light-switch');

function lightSwitchFlicks() {
  $container.className = 'container on';
  $lightSwitch.className = 'light-switch on';
  // var lightSwitch = true;
}
$lightSwitch.addEventListener('click', lightSwitchFlicks);
