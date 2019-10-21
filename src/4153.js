n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let triangle;
while ((triangle = n.shift()) !== '0 0 0') {
  let T = triangle.split` `.map(v=>+v)
  T.sort((a,b)=>a-b)
  let [A, B, C] = T
  if (A**2 + B**2 === C**2) console.log('right')
  else console.log('wrong')
}
