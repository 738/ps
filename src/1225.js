let [A,B]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ')
console.log(A.split('').reduce((at,av)=>
  at- -B.split('').reduce((bt,bv)=>
    bt-  -av*bv
  ,0)
,0))
