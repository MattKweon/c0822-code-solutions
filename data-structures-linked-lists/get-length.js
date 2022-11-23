/* exported getLength */

function getLength(list) {
  let copy = list;
  let count = 0;
  while (copy !== null) {
    count++;
    copy = copy.next;
  }
  return count;
}
