let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
n.pop()
for (let i=0; i<n.length; i++) {
  let A=n[i].split(' ')
  let c=A.shift()
  let s=A.join(' ')
  let cnt=0
  for (let j=0; j<s.length; j++) {
    if (s.toLowerCase()[j]===c) {
      cnt++
    }
  }
  console.log(c, cnt)
}
