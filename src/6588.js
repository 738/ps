let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v);
const MAX = 1000000;
let isPrime = Array(MAX + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;
for (let i = 2; i*i < MAX; i++) {
  if (!isPrime[i]) continue;
  for (let j = i*i; j <= MAX; j += i) {
    isPrime[j] = false;
  }
}
n.forEach(v => {
  if (v===0) return;
  for (let i = 3; i <= v; i++) {
    if (isPrime[i] && isPrime[v-i]) {
      console.log(`${v} = ${i} + ${v-i}`);
      break;
    }
  }
});
