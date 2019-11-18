let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let t=+n.shift()
while (t--) {
  let [H,W,N]=n.shift().split(' ').map(v=>+v)
  console.log(sol(H,W,N))
}
function sol(h,m,n) {
  let x=n/h|0
  let y=n%h
  if (y===0) {
    y=h
    x-=1
  }
  return y+(pad(x+1))
}
function pad(n) {
  return (n<10?'0':'')+n
}
