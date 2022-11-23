/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const tailNode = new LinkedList(value);
  let copy = list;
  while (copy.next !== null) {
    copy = copy.next;
  }
  copy.next = tailNode;
}
