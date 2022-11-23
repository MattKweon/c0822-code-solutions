/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() === 'undefined') return;
  const toEnd = queue.dequeue();
  queue.enqueue(toEnd);
}
