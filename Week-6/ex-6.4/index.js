function buyAndSellStocks(arr) {
  let [minimum] = arr;
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    let profit = arr[i] - minimum;
    maxProfit = Math.max(profit, maxProfit);
    minimum = Math.min(minimum, arr[i]);
  }
  return maxProfit;
}

console.log(buyAndSellStocks([7, 1, 5, 3, 6, 4]));
