/* exported includes */

function includes(list, value) {
  let copy = list;
  while (copy !== null) {
    if (copy.data === value) {
      return true;
    }
    copy = copy.next;
  }
  return false;
}
