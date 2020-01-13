/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
    const n = mat.length;
    const m = mat[0].length;
    let res=Array.from(Array(n), ()=>Array(m).fill(0))
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            for (let k=(j-K<0?0:j-K); k<=(j+K>=n?n-1:j+K); k++) {
                res[j][i] += mat[k].slice(i-K<0?0:i-K, i+K>=m?m:i+K+1).reduce((t,v)=>t+v);
            }
        }
    }
    return res;
};
