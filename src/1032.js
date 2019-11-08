let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
n.shift()
let tmp=n[0]
let len=tmp.length
for (let i=1; i<n.length; i++) {
  let tmp2=''
  for (let j=0; j<len; j++) {
    if (n[i][j] === tmp[j]) {
      tmp2+=n[i][j]
    } else {
      tmp2+='?'
    }
  }
  tmp=tmp2
}
console.log(tmp)
