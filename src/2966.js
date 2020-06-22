const T=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').pop();
const [A,B,G]=["ABC","BABC","CCAABB"];
const names=["Adrian","Bruno","Goran"];
const sums=[0,0,0];
for (let i=0; i<T.length; i++) {
  if (A[i%A.length]===T[i]) sums[0]+=1;
  if (B[i%B.length]===T[i]) sums[1]+=1;
  if (G[i%G.length]===T[i]) sums[2]+=1;
}
const M=Math.max(...sums);
console.log(M);
for (let i=0;i<sums.length;i++) {
  if (sums[i]===M) console.log(names[i])
}
