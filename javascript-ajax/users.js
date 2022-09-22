var $userList = document.querySelector('#user-list');

function getUserNames() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('status:', xhr.status);
    console.log('response:', xhr.response);
    for (var key in xhr.response) {
      var newEl = document.createElement('li');
      console.log(newEl);
      newEl.textContent = xhr.response[key].name;
      $userList.appendChild(newEl);
    }
  });
  xhr.send();
}

getUserNames();
