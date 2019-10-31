let [A, B]=require('fs').readFileSync('dev/stdin').toString().trim().split` `;
let diff=B.length - A.length;
let min = 50;
for (let i=0; i<=diff; i++) {
  let d=B.substr(i, A.length).split``.reduce((t,v,i)=>t + +(v!==A[i]), 0);
  if (d < min) min = d;
}
console.log(min);
