let n=+require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let p=5
let q=7
for (let i=1;i<n;i++) {
  p+=q
  q+=3
  p%=45678
}
console.log(p)
