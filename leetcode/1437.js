/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let isStarted = false;
    let apart = -1;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === 1) {
            isStarted = true;
            if (apart < k && apart !== -1) return false;
            apart = 0;
        } else {
            if (!isStarted) continue;
            apart ++;
        }
    }
    return true;
};
