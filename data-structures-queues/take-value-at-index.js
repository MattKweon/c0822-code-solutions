/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (typeof queue.peek() === 'undefined') return;
  for (let i = index; i > 0; i--) {
    const toEnd = queue.dequeue();
    queue.enqueue(toEnd);
  }
  return queue.dequeue();
}
