/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const top = stack.pop();
  const output = stack.peek();
  if (top === undefined) {
    return;
  }
  stack.push(top);
  return output;
}
