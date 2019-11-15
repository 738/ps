let n=+require('fs').readFileSync('dev/stdin').toString().trim()
function getGumminsu(num) {
  for (let i=num; i>=4; i--)
    if ((i+'').split('').every(v=>v==4||v==7))
      return i
}
console.log(getGumminsu(n))
