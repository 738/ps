n=+require('fs').readFileSync('dev/stdin')
console.log(n%400?n%100?n%4?0:1:0:1)
