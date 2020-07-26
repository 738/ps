const n=+require('fs').readFileSync('dev/stdin').toString().trim();
const fib = m => {
  if (m === 0) return 0;
  if (m === 1) return 1;
  return fib(m-1) + fib(m-2); 
}
console.log(fib(n));
