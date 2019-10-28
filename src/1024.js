let [N,L]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(v=>+v);
(()=>{
  let x=-1;
  for (let i=L; i<=100; i++) {
    let t=i*(i-1)/2;
    if ((N - t) % i === 0 && (N - t) / i >= 0) {
      x = (N - t) / i;
      console.log(Array.from(Array(i), (_, k)=>x+k).join(' '));
      return;
    }
  }
  console.log(x);
})();
