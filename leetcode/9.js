/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let str = x+'';
    for (let i=0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length-i-1]) return false;
    }
    return true;
};
