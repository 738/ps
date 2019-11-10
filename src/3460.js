n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
n.slice(1).map(v=>+v).forEach(v=>{
  let b=v.toString(2)
  console.log(b.split('').reverse().reduce((t,v,i)=>{
    if (v==1) return [...t, i]
    return t
  },[]).join(' '))
})
