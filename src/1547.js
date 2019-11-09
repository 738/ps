let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
n.shift()
let pos=1
for (let i=0; i<n.length; i++) {
  let [x, y]=n[i].split(' ').map(v=>+v)
  if (x === y) continue
  if (x === pos) pos = y
  else if (y === pos) pos = x
}
console.log(pos)
