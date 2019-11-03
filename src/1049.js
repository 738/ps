n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [N, M]=n.shift().split` `.map(v=>+v);
let prices = [];
for (let i=0; i<M; i++) {
    prices.push(n.shift().split` `.map(v=>+v));
}
let greedy = [0];
for (let i=1 ; i<=6; i++) {
    greedy[i] = Math.min(...prices.map(v=>i*v[1]));
    greedy[i] = Math.min(greedy[i], ...prices.map(v=>v[0]));
}
console.log(Math.floor(N/6)*greedy[6] + greedy[N%6]);
