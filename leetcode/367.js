/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    return binarySearch(1, num);
};

function binarySearch(start, end) {
    let low=start;
    let high=end;
    let mid;
    while (low<=high) {
        mid=Math.floor((low+high)/2);
        if (mid**2 === end) return true;
        if (mid**2 > end) {
            high=mid-1;
        } else {
            low=mid+1;
        }
    }
    return false;
}
