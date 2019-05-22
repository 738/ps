sortArray=(a,b=a.filter(v=>v%2).sort((c,d)=>c-d))=>a.map(v=>v%2?b.shift():v)
