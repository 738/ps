const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
n.shift();
const people = n.map(v=>v.split(' ').map(v=>+v));
function isBigger(a, b) {
  return a[0] > b[0] && a[1] > b[1];
}
const result = [];
for (let i=0; i<people.length; i++) {
  let rank = 1;
  for (let j=0; j<people.length; j++) {
    if (i===j) continue;
    if (isBigger(people[j], people[i])) rank++;
  }
  result.push(rank)
}
console.log(result.join(' '));
