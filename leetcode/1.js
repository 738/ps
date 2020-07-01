/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (map[comp] !== undefined) {
            return [map[comp], i];
        }
        map[nums[i]] = i;
    }
    return [];
};
