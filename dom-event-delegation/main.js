var $taskList = document.querySelector('.task-list');
var $taskListItem = document.querySelector('.task-list-item');

function singleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    // $taskList.closest('.task-list-item');
    console.log('closest .task-list-item', $taskListItem);
    $taskListItem.remove();
  }
}
$taskList.addEventListener('click', singleClick);
