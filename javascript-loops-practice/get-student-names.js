/* exported getStudentNames */
/*
[x] create an empty array for output storage
[x] loop through the array to get each object
[x] collect the value of each name property
[x] push value of name property to output array
[x] return array
 */

function getStudentNames(students) {
  var output = [];
  for (var i = 0; i < students.length; i++) {
    output.push(students[i].name);
  }
  return output;
}
