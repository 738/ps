let [N, M, K]=require('fs').readFileSync('dev/stdin').toString().trim().split` `.map(v=>+v);
while(K>0) {
  if (N < 2*M) {
    M--;
  } else {
    N--;
  }
  K--;
}
if (N < 2*M) console.log(Math.floor(N/2));
else console.log(M);
