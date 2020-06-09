Array.from(Array(9000),(_,i)=>i+1000)
.forEach(v => {
  if (sum(v+'') === sum(v.toString(12)) && sum(v+'') === sum(v.toString(16))) console.log(v);
})

function sum(numStr) {
  return numStr.split('').reduce((a,c)=>{
    if (/[a-z]/.test(c)) c=c.charCodeAt()-87
    return a- -c
  }, 0);
}
