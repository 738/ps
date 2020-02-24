/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const dp = [0,1];
    if (num === 0) return [0];
    if (num === 1) return dp;
    for (let i=2; i<=num; i++) {
        dp.push(dp[i >> 1] + (i%2));
    }
    return dp;
};
