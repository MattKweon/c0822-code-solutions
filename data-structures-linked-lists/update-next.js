/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    list = value;
  } else {
    let secondNode = list.next;
    if (secondNode.next === null) {
      secondNode = value;
    } else {
      value.next = secondNode.next;
      list.next.data = value;
    }
  }
}
