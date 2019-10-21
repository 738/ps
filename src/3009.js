n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [A,B]=[[],[]]
for (let i=0; i<3; i++) {
  A.push(+n[i].split` `[0])
  B.push(+n[i].split` `[1])
}
helper=arr=>{
  if (arr[0] === arr[1]) {
    return arr[2]
  } else if (arr[0] === arr[2]) {
    return arr[1]
  } else {
    return arr[0]
  }
}
console.log(helper(A), helper(B))
