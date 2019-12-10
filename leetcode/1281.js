/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n=(n+'').split('')
    return n.reduce((t,v)=>t*v) - n.reduce((t,v)=>t- -v)
};
