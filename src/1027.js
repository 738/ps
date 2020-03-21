const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const arr = n[1].split(' ').map(v=>+v);
let max = -Infinity;
for (let i=0; i<arr.length; i++) {
  let count = 0;
  let min_r = Infinity;
  for (let j=i-1; j>=0; j--) {
    let r = (arr[i]-arr[j]) / (i-j);
    if (min_r > r) {
      count ++;
      min_r = r;
    }
  }
  let max_r = -Infinity;
  for (let j=i+1; j<arr.length; j++) {
    let r = (arr[j]-arr[i]) / (j-i);
    if (max_r < r) {
      count ++;
      max_r = r;
    }
  }
  if (count > max) {
    max = count;
  }
}
console.log(max);
