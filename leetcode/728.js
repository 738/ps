/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result=[]
    for (let i=left; i<=right; i++) {
        if ((i+'').split('').every(v=>i%v===0)) result.push(i);
    }
    return result;
};
