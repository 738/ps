/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.reduce((t,v)=>{
        return t + ((v+'').length % 2 === 0);
    }, 0);
};
