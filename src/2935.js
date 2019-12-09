let [A,op,B]=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
if (op === '*') {
  console.log(1+'0'.repeat(A.length + B.length - 2))
} else {
  if (A.length === B.length) {
    console.log(2+'0'.repeat(A.length-1))
  } else if (A.length > B.length) {
    let tmp=A.split('')
    tmp.splice(A.length-B.length, 1, 1)
    console.log(tmp.join(''))
  } else {
    let tmp=B.split('')
    tmp.splice(B.length-A.length, 1, 1)
    console.log(tmp.join(''))
  }
}
