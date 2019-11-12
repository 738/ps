let [A,B]=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let a=A.split('').sort()
let b=B.split('').sort()
let blen=b.length
for (let i=0; i<a.length; i++)
  if (b.includes(a[i])) b.splice(b.indexOf(a[i]), 1)
console.log(2*b.length + a.length - blen)
