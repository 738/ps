n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v).sort((a,b)=>a-b);
(()=>{
  for (let i=0; i<8; i++) {
    for (let j=i+1;j<9;j++) {
      let tmp=[...n]
      tmp.splice(j,1)
      tmp.splice(i,1)
      let sum=tmp.reduce((t,v)=>t+v,0)
      if (sum===100) {
        console.log(tmp.join`\n`)
        return
      }
    }
  }
})()
