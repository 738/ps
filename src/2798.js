let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [N,M]=n.shift().split(' ').map(v=>+v)
let cards=n.shift().split(' ').map(v=>+v)
let result=9
for (let i=0; i<=cards.length-3; i++) {
  for (let j=i+1; j<=cards.length-2; j++) {
    for (let k=j+1; k<=cards.length-1; k++) {
      let sum=cards[i]+cards[j]+cards[k]
      if (M>=sum && sum>result) result=sum
    }
  }
}
console.log(result)
