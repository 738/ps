let [N,M]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(v=>+v)
if (N===1) {
  console.log(1)
} else if (N===2) {
  if (M<=2) {
    console.log(1)
  } else if (M<=4) {
    console.log(2)
  } else if (M<=6) {
    console.log(3)
  } else {
    console.log(4)
  }
} else {
  if (M<=4) {
    console.log(M)
  } else if (M<=6) {
    console.log(4)
  } else {
    console.log(M-2)
  }
}
