let p=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v)
let N=p.shift()
const MAX=15
let arr=Array.from(Array(MAX), ()=>Array(MAX).fill(0))
for (let i=1; i<MAX; i++) arr[0][i]=i
for (let i=1; i<MAX; i++)
  for (let j=1; j<MAX; j++)
    arr[i][j] = arr[i-1].slice(0, j+1).reduce((t,v)=>t+v,0)
while (N--) {
  let k=p.shift()
  let n=p.shift()
  console.log(arr[k][n])
}
