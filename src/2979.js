let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [A,B,C]=n.shift().split(' ').map(v=>+v)
let start_times=[]
let end_times=[]
let times=Array(101).fill(0)
let price=0
for (let i=0; i<3; i++) {
  let [start, end]=n.shift().split(' ').map(v=>+v)
  start_times.push(start)
  end_times.push(end)
  for (let j=start; j<end; j++) times[j]++
}
for (let i=Math.min(...start_times); i<=Math.max(...end_times); i++) {
  switch(times[i]) {
    case 1:
      price+=times[i]*A
      break
    case 2:
      price+=times[i]*B
      break
    case 3:
      price+=times[i]*C
      break
    default:
      break 
  }
}
console.log(price)
