let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let nums = n.shift().split(' ').map(v=>+v)
let abc = n.shift()
nums.sort((a,b)=>a-b)
let o = {}
o['A']=nums.shift();
o['B']=nums.shift();
o['C']=nums.shift();
console.log(abc.split``.reduce((t,v)=>[...t, o[v]], []).join` `)
