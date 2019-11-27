let N=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let a;
while(a = N.shift()) {
  let [n,k]=a.split(' ').map(v=>+v)
  let cnt=n
  let stamp=0
  while (n >= k) {
    stamp=n%k
    n=n/k|0
    cnt+=n
    n+=stamp
  }
  console.log(cnt)
}
