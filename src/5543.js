const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
const b=Math.min(...n.slice(0,3));
const v=Math.min(...n.slice(3));
console.log(b+v-50);
