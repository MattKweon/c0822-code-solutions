function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log(convertMinutesToSeconds(5));

function greet(name) {
  var greetings = 'Hey ' + name;
  return greetings;
}
console.log(greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log(getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var len = array.length - 1;
  return array[len];
}

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
