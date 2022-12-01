class MyQueue {
  #s1;
  #s2;
  constructor() {
    this.size = 0;
    this.#s1 = new Stack();
    this.#s2 = new Stack();
    this.first = this.#s1.first;
    this.last = this.#s1.last;
  }

  push(val) {
    this.#s1.push(val);
    this.first = this.#s1.first;
    this.last = this.#s1.last;
    return ++this.size;
  }

  pop() {
    while (!this.#s1.isEmpty()) {
      this.#s2.push(this.#s1.pop());
    }
    const first = this.#s2.pop();
    while (!this.#s2.isEmpty()) {
      this.#s1.push(this.#s2.pop());
    }
    this.first = this.#s1.first;
    this.last = this.#s1.last;
    if (this.size) this.size--;
    return first;
  }

  peek() {
    while (!this.#s1.isEmpty()) {
      this.#s2.push(this.#s1.pop());
    }
    const first = this.#s2.peek();
    while (!this.#s2.isEmpty()) {
      this.#s1.push(this.#s2.pop());
    }
    return first;
  }

  isEmpty() {
    return !this.size;
  }
}

// Time Complexity: O(n)
// push operation O(1)
// pop operation O(n)
// Space Complexity: O(n)
