/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let sum = 0;
    S.split``.forEach(s => {
        if (J.split``.find(j => j == s) !== undefined)
            sum += 1;
    });
    return sum;
};
