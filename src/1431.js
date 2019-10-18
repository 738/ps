let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
n.shift()
const sumOfNum = (str) => {
  return str.split``.reduce((t, v) => {
    return t + (Number.isNaN(+v) ? 0 : +v)
  }, 0)
}
n.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length
  if (sumOfNum(a) !== sumOfNum(b)) return sumOfNum(a) - sumOfNum(b)
  return a.localeCompare(b)
})
n.forEach(v=>console.log(v))
