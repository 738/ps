let [L,A,B,C,D]=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v)
console.log(L-Math.max(Math.ceil(A/C), Math.ceil(B/D)))
