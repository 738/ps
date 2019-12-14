/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let z=x^y;
    return z.toString(2).split('').filter(v=>v==1).length;
};
