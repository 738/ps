n=+require('fs').readFileSync('dev/stdin').toString();

for (let i = 2; i <= n; i++) {
  while (n % i === 0) {
    n /= i;
    console.log(i);
  }
}
