function createIncrement() {
  let count = 0;

  function increment() {
    count++;
  }

  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log(); // Count is 0 because the message variable has a stale value of count.
// In order to log the latest value of count,
// we can update the message variable inside the increment()
