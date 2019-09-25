/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    return (sum(A) - sum([...new Set(A)])) / (A.length / 2 - 1);
};

const sum = A => {
    return A.reduce((acc, cur) => acc + cur);
}
