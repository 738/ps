n=+require('fs').readFileSync('dev/stdin').toString().trim()
m=2
if([1,2].includes(n)) console.log(n)
else
  while(m<n) {
    m*=2
    if (m>=n) console.log((n-m/2)*2)
  }
