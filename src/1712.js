n=require('fs').readFileSync('dev/stdin').toString().trim().split` `.map(v=>+v)
if (n[1]>=n[2]) console.log(-1)
else console.log(Math.floor(n[0]/(n[2]-n[1]))+1)
