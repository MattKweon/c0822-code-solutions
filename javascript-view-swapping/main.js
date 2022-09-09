var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
// var $view = document.querySelectorAll('.view');

function clickTab(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tab.length; i++) {
    if ($tab[i] === event.target) {
      $tab[i].className = 'tab active';
    } else {
      $tab[i].className = 'tab';
    }
  }
}
$tabContainer.addEventListener('click', clickTab);
