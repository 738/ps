let [A,B]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ')
let crossword=Array.from(Array(B.length), ()=>Array(A.length).fill('.'))
let [a,b]=getFirstMatchedWord(A,B)
for (let i=0; i<A.length; i++) {
  crossword[b][i]=A[i]
}
for (let i=0; i<B.length; i++) {
  crossword[i][a]=B[i]
}
for (let i=0; i<crossword.length; i++) {
  console.log(crossword[i].join(''))
}
function getFirstMatchedWord(a, b) {
  for (let i=0; i<a.length; i++) {
    for (let j=0; j<b.length; j++) {
      if (a[i]===b[j]) {
        return [i, j]
      }
    }
  }
  return null
}
