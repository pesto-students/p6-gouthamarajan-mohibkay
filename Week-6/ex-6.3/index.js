function sortArray(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  function swap(arr, num1, num2) {
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  }

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(arr, low, mid);
      low++;
      mid++;
    }

    if (arr[mid] === 1) mid++;

    if (arr[mid] === 2) {
      swap(arr, mid, high);
      high--;
    }
  }
  return arr;
}

console.log(sortArray([0, 2, 1, 2, 0]));
