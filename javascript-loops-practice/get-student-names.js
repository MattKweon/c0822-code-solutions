/* exported getStudentNames */
/*
[] create an empty array for output storage
[] loop through each object to find the name property
[] collect the value of each name property
[] push value of name property to output array
[] return array
 */

function getStudentNames(students) {
  var output = [];
  for (var name in students) {
    output.push(students[name]);
  }
  return output;
}
