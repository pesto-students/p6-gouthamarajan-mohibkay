class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export default class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  peek() {
    return this.first.val;
  }

  isEmpty() {
    return !this.size;
  }
}

function isOpeningParenthesis(paren) {
  return paren === '(' || paren === '{' || paren === '[';
}

function isMatching(opening, closing) {
  return (
    (opening === '(' && closing === ')') ||
    (opening === '{' && closing === '}') ||
    (opening === '[' && closing === ']')
  );
}

function isParenthesisMatching(string) {
  const stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    let cur = string.charAt(i);
    if (isOpeningParenthesis(cur)) {
      stack.push(cur);
    } else if (stack.isEmpty()) return false;
    else if (!isMatching(stack.peek(), cur)) return false;
    else stack.pop();
  }
  return stack.isEmpty();
}

// Time complexity : O(n)
// Space complexity: O(n)
