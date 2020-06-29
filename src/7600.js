const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
n.slice(0,n.length-1).forEach(str=>{
  const set = str.split('').reduce((a,c) => {
    if (/[a-zA-Z]/.test(c)) a.add(c.toLowerCase());
    return a;
  }, new Set());
  console.log(set.size);
});
