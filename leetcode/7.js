/**
 * @param {number} x
 * @return {number}
 */
const INT_MIN = -(2**31)
const INT_MAX = 2**31 - 1
var reverse = function(x) {
    x += '';
    let prefix = '';
    if (x[0] === '-') {
        prefix = '-';
        x = x.substring(1);
    }
    let answer = +(x.split``.reverse``.join``);
    if (prefix === '-') {
        answer = parseInt(prefix + answer);
    }
    if (answer < INT_MIN || answer > INT_MAX) answer = 0
    return answer
};
