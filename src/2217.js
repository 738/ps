n=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`.map(v=>+v);
n.shift();
console.log(Math.max(...n.sort((a,b)=>a-b).map((v,i) => (n.length - i)*v)));
