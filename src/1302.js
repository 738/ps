n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
n.shift();
obj={}
n.forEach(v=>{
    if (obj[v] === undefined) obj[v] = 1;
    else obj[v]++;
});
console.log(Object.keys(obj).sort((a,b) => {
    if (obj[b] === obj[a]) return a.localeCompare(b);
    return obj[b] - obj[a];
}).shift());
