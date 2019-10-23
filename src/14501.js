n=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
N=+n.shift()
let [T, P] =[[0], [0]];
for (let i=0; i<N; i++) {
  let tmp=n.shift().split` `
  T.push(+tmp[0])
  P.push(+tmp[1])
}
let dp=Array.from(Array(N+1), (_, i) => P[i])
for (let i=2; i<=N; i++) {
  for (let j=1; j<i; j++) {
    if (i-j >= T[j]) {
      dp[i] = Math.max(dp[i], dp[j] + P[i])
    }
  }
}
console.log(Math.max(...dp.filter((_, i)=>i + T[i] <= N + 1)))
