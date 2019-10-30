let n=require('fs').readFileSync('dev/stdin').toString().trim();
let dict=Array(26).fill(0);
n.split``.forEach(v => {
  if (!/[a-z]/g.test(v)) return;
  dict[v.charCodeAt()-97]++;
});
let max = Math.max(...dict);
console.log(dict.map((v,i) => v===max?i:-1).filter(v => v !== -1).map(v => String.fromCharCode(97+v)).join``);
