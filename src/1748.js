n=+require('fs').readFileSync('dev/stdin').toString().trim().split('\n').shift();
const getLength = n => {
  if (n<10) return 1;
  if (n<100) return 2;
  if (n<1000) return 3;
  if (n<10000) return 4;
  if (n<100000) return 5;
  if (n<1000000) return 6;
  if (n<10000000) return 7;
  if (n<100000000) return 8;
  return 9;
}
let sum = 0;
for (let i=1; i<=n; i++) {
  sum += getLength(i);
}
console.log(sum);
