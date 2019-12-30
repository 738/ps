/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = [];
    if (n % 2 === 1) {
        if (n === 1) return [0];
        else if (n === 3) return [-1, 0, 1];
        else {
            for (let i=1; i<=(n-3)/2; i++) {
                res.push(-i);
                res.push(i);
            }
            let a = (n-3)/2 + 1;
            let b = a + 1;
            res.push(-a-b);
            res.push(a);
            res.push(b);
            return res.sort((a,b)=>a-b);
        }
    } else {
        for (let i=1; i<=n/2; i++) {
            res.push(-i);
            res.push(i);
        }
        return res.sort((a,b)=>a-b);
    }
};
