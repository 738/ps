let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let ACards=n.shift().split(' ').map(v=>+v)
let BCards=n.shift().split(' ').map(v=>+v)
let AScore=0
let BScore=0
let lastWinner=null
for (let i=0; i<ACards.length; i++) {
  if (ACards[i]>BCards[i]) {
    lastWinner='A'
    AScore+=3
  } else if (ACards[i]<BCards[i]) {
    lastWinner='B'
    BScore+=3
  } else {
    AScore+=1
    BScore+=1
  }
}
console.log(AScore, BScore)
if (lastWinner === null) {
  console.log('D')
} else {
  if (AScore > BScore) console.log('A')
  else if (AScore < BScore) console.log('B')
  else console.log(lastWinner)
}
