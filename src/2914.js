let [A,I]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(v=>+v)
console.log(A*(I-1)+1)
