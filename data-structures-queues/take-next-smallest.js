/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') return;
  const first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') return first;
  if (first < queue.peek()) {
    return first;
  } else {
    queue.enqueue(first);
    while (queue.peek() !== first) {
      const next = queue.dequeue();
      if (next < queue.peek()) {
        return next;
      } else {
        queue.enqueue(next);
      }
    }
  }
}
