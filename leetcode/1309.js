/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let res = '';
    for (let i=s.length-1; i>=0; i--) {
        if (s[i] === '#') {
            res = String.fromCharCode((s[i-2]+s[i-1])- -96) + res;
            i -= 2;
        } else {
            res = String.fromCharCode(s[i]- -96) + res;
        }
    }
    return res;
};
