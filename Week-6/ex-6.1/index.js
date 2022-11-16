function maxSubArray(arr) {
  let [maxSum] = arr;
  let curSum = 0;

  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];

    maxSum = Math.max(maxSum, curSum);

    curSum = curSum < 0 ? 0 : curSum;
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, 2, 3, 4, -10]));
