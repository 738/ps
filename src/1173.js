let [N,m,M,T,R]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(v=>+v)
let cur=m
let time=0
let totalTime=0
if (m+T>M) console.log(-1)
else {
  while (time<N) {
    if (cur+T>M) {
      cur-=R
      if (cur<m) cur=m
    } else {
      cur+=T
      time++
    }
    totalTime++
  }
  console.log(totalTime)
}
