let n=+require('fs').readFileSync('dev/stdin').toString().trim();
let num=666;
let count=0;
while(count<n) {
  if ((num+'').includes('666')) count++;
  num++;
}
console.log(num-1);
