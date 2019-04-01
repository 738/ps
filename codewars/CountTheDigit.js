// https://www.codewars.com/kata/count-the-digit/train/javascript
nbDig=(n,d)=>Array(n+1).fill().map((_,i)=>i**2).join``.split``.filter(v=>v==d).length;
