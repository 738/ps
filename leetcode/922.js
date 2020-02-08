/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    const evens = A.filter(v => v % 2 === 0);
    const odds = A.filter(v => v % 2 === 1);
    const result = [];
    while (evens.length || odds.length) {
        if (evens.length) result.push(evens.shift())
        if (odds.length) result.push(odds.shift())
    }
    return result;
};
