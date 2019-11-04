let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let tc=+n.shift()
for (let i=0; i<tc; i++) {
  let [N, M]=n.shift().split(' ').map(v=>+v)
  let q=n.shift().split(' ').map((v,i)=>{
    return {
      index: i,
      priority: +v
    }
  })
  let cnt=0
  while (q.length) {
    let max = Math.max(...q.map(v=>v.priority))
    let front = q.shift()
    if (front.priority === max) {
      cnt ++
      if (front.index === M) {
        console.log(cnt)
        break
      }
    } else {
      q.push(front)
    }
  }
}
