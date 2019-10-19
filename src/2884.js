n=require('fs').readFileSync('dev/stdin').toString().trim().split` `
H=+n[0]
M=+n[1]
console.log(M>44?H:H>0?H-1:23,M+(M>44?-45:15))
