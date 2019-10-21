n=+require('fs').readFileSync('dev/stdin').toString().trim()
for(let i=n; i>0; i--) console.log(" ".repeat(n-i) + "*".repeat(2*i-1))
