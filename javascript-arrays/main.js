var colors = ['red', 'white', 'blue'];
colors[2] = 'green';

var students = ['Cody', 'Tim', 'Luke', 'Leia'];
var numberOfStudents = students.length;
var lastIndex = students.length - 1;
var lastStudent = students[lastIndex];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors [2]:', colors[2]);

console.log('America is', colors[0] + ' ' + colors[1] + ' and ' + colors[2]);
console.log('Mexico is', colors[0] + ' ' + colors[1] + ' and ' + colors[3]);
console.log(colors);

console.log('There are ' + numberOfStudents + ' students in the class.');
console.log('The last student in the array is ' + lastStudent);
console.log('value of students:', students);
