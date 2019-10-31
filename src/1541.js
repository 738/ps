let n=require('fs').readFileSync('dev/stdin').toString().trim();
console.log(eval('(' + n.replace(/-/g,')-(').replace(/\d+/g, v=>`'${v}'`).replace(/[+]/g,'- -') + ')'));
