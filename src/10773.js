let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v)
let stack=[]
n.slice(1).forEach(v => {
  if (v === 0) stack.pop()
  else stack.push(v)
})
console.log(stack.reduce((t,v)=>t+v,0))
