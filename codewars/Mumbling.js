// https://www.codewars.com/kata/mumbling/train/javascript
accum=s=>s.split``.map((v,i)=>v.toUpperCase()+v.repeat(i).toLowerCase()).join`-`
