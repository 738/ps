let N=+require('fs').readFileSync('dev/stdin').toString().trim()
let cards=Array.from(Array(N), (_,i)=>i+1)
let discards=[]
function run(arr) {
  if (arr.length <= 1) return
  discards.push(cards.shift())
  cards.push(cards.shift())
  run(cards)
}
run(cards)
console.log([...discards, cards.shift()].join(' '))
