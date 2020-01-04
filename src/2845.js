let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [L, P] = n.shift().split(' ');
let people = L*P;
console.log(n.shift().split(' ').map(v=>v-people).join(' '));
