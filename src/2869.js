let [A,B,V]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(v=>+v)
let a=Math.ceil((V-A)/(A-B))
console.log(a+1)
