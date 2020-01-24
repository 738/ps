/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0;
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    }
    for (let i=0; i<s.length; i++) {
        if (s.substr(i,2) in map) {
            res += map[s.substr(i, 2)];
            i++;
        } else if (s.substr(i, 1) in map) {
            res += map[s.substr(i, 1)];
        }
    }
    return res;
};
