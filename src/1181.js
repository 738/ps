let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
n.shift()
n.sort((a,b)=>a.length-b.length||a.localeCompare(b))
Array.from(new Set(n)).forEach(v=>console.log(v))
