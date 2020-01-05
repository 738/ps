/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let D=Array(s.length+1).fill(false);
    D[0] = true;
    for (let i=1; i<=s.length; i++) {
        for (let j=0; j<i; j++) {
            if (D[j] && wordDict.includes(s.substring(j, i))) {
                D[i] = true;
                break;
            }
        }
    }
    return D[s.length];
};
