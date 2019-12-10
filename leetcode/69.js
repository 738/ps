/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x===0) return x;
    return binarySearch(0,x);
};

function binarySearch(start, end) {
    let low=start;
    let high=end;
    let mid;
    while (low <= high) {
        mid=Math.floor((low+high)/2);
        if (mid**2 > end) {
            high=mid-1;
        } else {
            if ((mid+1)**2 > end) return mid;
            low=mid+1;
        }
    }
}
