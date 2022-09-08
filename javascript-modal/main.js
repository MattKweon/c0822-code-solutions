var $openModalButton = document.querySelector('.open-modal-button');
var $surveyBackground = document.querySelector('.survey-background');
var $noButton = document.querySelector('.no-button');

function clickOpen() {
  if ($surveyBackground.className === 'survey-background hidden') {
    $surveyBackground.className = 'survey-background';
  }
}
$openModalButton.addEventListener('click', clickOpen);

function clickClose() {
  if ($surveyBackground.className === 'survey-background') {
    $surveyBackground.className = 'survey-background hidden';
  }
}
$noButton.addEventListener('click', clickClose);
