let n=+require('fs').readFileSync('dev/stdin').toString().trim()
for (let i=0; i<2*n; i++) {
  if (i%2===0) {
    console.log(Array(Math.ceil(n/2)).fill('*').join(' '))
  } else {
    if (n===1) continue
    console.log(' '+Array(Math.floor(n/2)).fill('*').join(' '))
  }
}
