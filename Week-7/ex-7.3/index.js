class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let head;
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = head.next;

function checkIfLoopExists(head) {
  const linkedListMap = new Map();

  while (head) {
    if (linkedListMap.has(head)) {
      return true;
    } else {
      linkedListMap.set(head, head);
    }
    head = head.next;
  }
  return false;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Using Floyd's Algorithm
function detectCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(checkIfLoopExists(head));
console.log(detectCycle(head));
