function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log(seconds);
}
convertMinutesToSeconds(5);

function greet(name) {
  console.log('Hey ' + name);
}
greet('Beavis');

function getArea(width, height) {
  console.log(width * height);
}
getArea(17, 42);

function getFirstName(person) {
  console.log(person.firstName);
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  var len = array.length - 1;
  console.log(array[len]);
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
