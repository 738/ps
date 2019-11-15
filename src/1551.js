let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [_,K]=n.shift().split(' ')
let arr=n.shift().split(',')
function sol(arr, num) {
  let tmpArr=[...arr]
  while (num--) {
    tmpArr=tmpArr.reduce((t,v,i,a)=>{
      if (i!==a.length-1) return [...t, a[i+1]-a[i]]
      return t
    }, [])
  }
  return tmpArr
}
console.log(sol(arr,K).join(','))
