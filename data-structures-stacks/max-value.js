/* exported maxValue */

function maxValue(stack) {
  let output = stack.peek();
  if (stack.peek() === undefined) {
    output = -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      if (stack.peek() > output) {
        output = stack.peek();
      }
      stack.pop();
    }
  }
  return output;
}
