function doTask1(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task 1 done');
    }, delay);
  });
}

function doTask2(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task 2 done');
    }, delay);
  });
}

function doTask3(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task 3 done');
    }, delay);
  });
}

async function runTasks() {
  const task1 = await doTask1(1000);
  const task2 = await doTask2(2000);
  const task3 = await doTask3(4000);

  return { task1, task2, task3 };
}

console.log(runTasks());

async function* generator() {
  yield await doTask1(1000);
  yield await doTask2(2000);
  yield await doTask3(4000);
}

console.log(generator().next());
console.log(generator().next());
console.log(generator().next());
