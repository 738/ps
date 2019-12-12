/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let low = 0;
    let high = A.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high)/2);
        if (A[mid] > A[mid + 1]) {
            high = mid - 1;
        } else {
            if (A[mid + 1] > A[mid + 2]) return mid + 1;
            low = mid + 1;
        }
    }
};
