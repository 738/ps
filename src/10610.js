n=require('fs').readFileSync('dev/stdin').toString().trim();
N=n.split``.map(v=>+v);
if (!N.some(v=>v===0)) console.log(-1);
else if (N.reduce((t,v)=>t+v, 0) % 3 !== 0) console.log(-1);
else console.log(N.sort((a,b)=>b-a).join``);
