import Stack from '../ex-7.4';

function nextGreaterElement(arr) {
  const stack = new Stack();
  const len = arr.length;
  const result = [];

  for (let i = len - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() <= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      result[i] = -1;
    } else {
      result[i] = stack.peek();
    }
    stack.push(arr[i]);
  }
  return result.join(' ');
}

nextGreaterElement([5, 7, 0, 2, 4, 10]);

// Time complexity : O(n)
// Space complexity: O(n)
