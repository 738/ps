let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let colors=['black','brown','red','orange','yellow','green','blue','violet','grey','white']
console.log((colors.indexOf(n.shift())+''+colors.indexOf(n.shift()))*(10**colors.indexOf(n.shift())))
