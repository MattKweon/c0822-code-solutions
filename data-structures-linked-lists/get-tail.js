/* exported getTail */

function getTail(list) {
  let copy = list;
  while (copy.next !== null) {
    copy = copy.next;
  }
  return copy.data;
}
