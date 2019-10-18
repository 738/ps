let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
n.shift()
let A=n.shift().split` `.map(v=>+v)
let B=[...A]
B.sort((a,b)=>a-b)
console.log(A.map(v=>{
  let idx = B.indexOf(v)
  B.splice(idx, 1, -1)
  return idx
}).join` `)
