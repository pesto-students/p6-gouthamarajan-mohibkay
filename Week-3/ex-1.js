const add = (...args) => args.reduce((acc, curr) => acc + curr, 0);

const memoize = (func) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    cache[key] = func(...args);
    return cache[key];
  };
};

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100)); //returns 200
console.log(memoizeAdd(100)); //returns 100
console.log(memoizeAdd(100, 200)); //returns 300
console.log(memoizeAdd(100, 100)); //returns 200 without computing
