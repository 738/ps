// var fs = require('fs');
// var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

// var max = [...input].sort((a, b) => b - a)[0];
// console.log(max);
// console.log(input.indexOf(max) + 1);

n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
m=[...n].sort((a,b)=>b-a)[0]
console.log(`${m}\n${n.indexOf(m)+1}`)
