let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
n.shift()
n.sort((a,b) => {
  if (a.length !== b.length) return a.length - b.length
  return a.localeCompare(b)
})
Array.from(new Set(n)).forEach(v=>console.log(v))
