let [A,B,N]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(v=>+v)
let r=0
while (N--) {
  A%=B
  A*=10
  r=A/B
}
console.log(r|0)
