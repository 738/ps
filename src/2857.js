let n=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
let fbi=n.reduce((t,v,i)=>v.includes('FBI')?[...t,i+1]:t,[])
console.log(fbi.length?fbi.join` `:'HE GOT AWAY!')
