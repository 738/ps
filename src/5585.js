n=+require('fs').readFileSync('dev/stdin').toString().trim();
const coins=[500, 100, 50, 10, 5, 1];
const money=1000;
let change=money - n;
let idx=0;
let count=0;
while (change > 0 && idx < coins.length) {
  if (change >= coins[idx]) {
    change -= coins[idx];
    count ++;
  } else {
    idx++;
  }
}
console.log(count);
