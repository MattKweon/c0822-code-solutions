/* exported take2nd */

function take2nd(queue) {
  if (typeof queue.peek() === 'undefined') return;
  const toEnd = queue.dequeue();
  queue.enqueue(toEnd);
  return queue.dequeue();
}
