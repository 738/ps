let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
n.shift()
for (let [A, B] of n.map(v=>v.split(' '))) {
  let result=[]
  for (let i=0; i<A.length; i++)
    result.push(diff(A[i], B[i]))
  console.log("Distances: " + result.join(' '))
}
function diff(a,b) {
  return a<=b?b.charCodeAt()-a.charCodeAt():(b.charCodeAt()+26)-a.charCodeAt()
}
