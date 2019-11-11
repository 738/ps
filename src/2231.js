let n=+require('fs').readFileSync('dev/stdin').toString().trim()
let arr=Array(n+1)
for (let i=1; i<=n; i++) {
  arr[i]=i+(i+'').split('').reduce((t,v)=>t- -v,0)
}
(function() {
  for (let i=1; i<=n; i++) {
    if (arr[i] === n) {
      console.log(i)
      return
    }
  }
  console.log(0)
})()
