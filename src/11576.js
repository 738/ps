let n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const A = +n[0].split(' ')[0];
const B = +n[0].split(' ')[1];
let numbers = n[2].split(' ').map(v=>+v);
let decimals = numbers.reverse().reduce((t, v, i) => {
  t += v * (A ** i);
  return t;
}, 0);
let result = [];
while (decimals !== 0) {
  result.unshift(decimals % B);
  decimals = Math.floor(decimals / B);
}
console.log(result.join` `);
