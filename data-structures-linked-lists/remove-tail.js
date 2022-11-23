/* exported removeTail */

function removeTail(list) {
  if (list.next !== null) {
    let copy = list;
    while (copy.next.next !== null) {
      copy = copy.next;
    }
    copy.next = null;
  }
}
