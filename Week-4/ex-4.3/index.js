const fibo = {
  count: 0,
  fiboFirst: 0,
  fiboSecond: 1,
  nextFibo: 0,
  max: 10,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    this.count = this.count + 1;
    if (this.count > 2) {
      this.nextFibo = this.fiboFirst + this.fiboSecond;
      this.fiboFirst = this.fiboSecond;
      this.fiboSecond = this.nextFibo;
    }
    return {
      value:
        this.count === 1
          ? this.fiboFirst
          : this.count === 2
          ? this.fiboSecond
          : this.nextFibo,
      done: this.nextFibo > this.max,
    };
  },
};

for (val of fibo) {
  console.log(val);
}
