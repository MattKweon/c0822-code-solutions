var student = {
  firstName: 'Matthew',
  lastName: 'Kweon',
  age: '23'
};
var fullName = student.firstName + ' ' + student.lastName;
student.livesInIrvine = false;
student.previousOccupation = 'Smart & Final cashier';

var vehicle = {
  make: 'BMW',
  model: 'E30 M3',
  year: '1988'
};
vehicle['color'] = 'orange';
vehicle['isConvertible'] = false;

var pet = {
  name: 'Bo',
  type: 'dog'
};
delete pet.name;
delete pet.type;

console.log('value of fullName:', fullName);
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

console.log('value of vehicle[color]:', vehicle['color']);
console.log('value of vehicle[isConvertible]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

console.log('value of pet:', pet);
