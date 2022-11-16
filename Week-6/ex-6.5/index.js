function pairDifference(arr, num) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 0;

  while (i <= arr.length && i <= arr.length) {
    if (arr[j] - arr[i] === num) return 1;
    else if (arr[j] - arr[i] < num) j++;
    else i++;
  }
  return 0;
}

console.log(pairDifference([5, 10, 3, 2, 50, 80], 78));
