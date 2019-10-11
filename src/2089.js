let n = require('fs').readFileSync('dev/stdin');
let s = '';
while (n !== 0) {
  if (n === 1) {
    s = 1 + s;
    n = 0;
  } else if (n % -2 === 0) {
    s = 0 + s;
    n /= -2;
  } else {
    s = 1 + s;
    n = Math.floor(n/-2) + 1;
  }
}
console.log(s);
