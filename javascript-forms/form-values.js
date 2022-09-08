var $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var name = $contactForm.elements.email.value;
  var email = $contactForm.elements.email.value;
  var message = $contactForm.elements.email.value;
  var messageData = {
    name,
    email,
    message
  };
  console.log(messageData);
  $contactForm.reset();
}
$contactForm.addEventListener('submit', handleSubmit);
