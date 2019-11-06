let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [N,M]=n.shift().split(' ').map(v=>+v)
let pan=[]
for (let i=0; i<N; i++) {
  pan.push(n.shift().split(''))
}
const getHowManyPaint=(y,x)=>{
  let cntWhenW=0
  let cntWhenB=0
  for (let i=y; i<y+8; i++) {
    for (let j=x; j<x+8; j++) {
      if (((i-y)%2===0 && (j-x)%2===0) || ((i-y)%2===1 && (j-x)%2===1)) {
        if (pan[i][j] !== "W") cntWhenW++
        else cntWhenB++
      } else {
        if (pan[i][j] === "W") cntWhenW++
        else cntWhenB++
      }
    }
  }
  return Math.min(cntWhenW, cntWhenB)
}
let min=64
for (let i=0; i<=N-8; i++) { 
  for (let j=0; j<=M-8; j++) {
    let tmp=getHowManyPaint(i,j)
    if (min > tmp) min = tmp
  }
}
console.log(min)
