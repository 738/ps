/**
 * @param {number[]} n
 * @return {number}
 */
arrayPairSum=n=>n.sort((a,b)=>a-b).reduce((a,c,i)=>i%2?a:a+c,0)
