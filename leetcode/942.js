/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let low = 0;
    let high = S.length;
    let res = [];
    for (let c of S) {
        if (c === 'I') res.push(low++);
        else res.push(high--);
    }
    res.push(low);
    return res;
};
