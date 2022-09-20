var $message = document.querySelector('.message');

function setOutput(outputContent) {
  $message.textContent = outputContent;
}

setTimeout(setOutput, 2 * 1000, 'Hello There');
