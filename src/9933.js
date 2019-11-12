let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
n.shift()
let m=[...n].map(v=>v.split('').reverse().join(''));
(()=>{
  for (let i=0; i<n.length; i++) {
    for (let j=0; j<m.length; j++) {
      if (n[i] === m[j]) {
        console.log(`${n[i].length} ${n[i][n[i].length/2|0]}`)
        return
      }
    }
  }
})()
