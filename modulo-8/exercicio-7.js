const prices =  [10, 50, 30, 80, 20];
const biggerPrice = prices.reduce((bigger, num) => num > bigger ? num : bigger);
console.log(biggerPrice);