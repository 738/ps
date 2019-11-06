let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [N,M]=n.shift().split(' ').map(v=>+v)
let nums=n.shift().split(' ').map(v=>+v)
let q=Array.from(Array(N), (_,i)=>(i+1))
const leftShift = () => {
  q.push(q.shift())
}
const rightShift = () => {
  q.unshift(q.pop())
}
let cnt=0
const run = targetNums => {
  if (targetNums.length === 0) return
  while (q.length && q[0] !== targetNums[0]) {
    if (q.indexOf(targetNums[0]) <= Math.floor(q.length/2)) leftShift()
    else rightShift()
    cnt++
  }
  q.shift()
  targetNums.shift()
  run(targetNums)
}
run(nums)
console.log(cnt)
