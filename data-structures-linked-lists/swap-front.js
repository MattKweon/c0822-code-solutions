/* exported swapFront */

function swapFront(list) {
  if (list.next == null) return list;
  const newHead = list.next;
  list.next = list.next.next;
  newHead.next = list;
  return newHead;
}
