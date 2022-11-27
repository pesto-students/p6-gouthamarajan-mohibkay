function threeSum(arr, sum) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let val = sum - (arr[i] + arr[j]);

      if (map.has(val)) {
        if (map.get(val) !== i && map.get(val) !== j) {
          return true;
        }
      }
    }
  }
  return false;
}

threeSum([-1, 2, 1, -4], -3);
