/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let strLen = -1;
    let result = 0;
    if (A.length > 1) strLen = A[0].trim().length;
    for (let i = 0; i < strLen; i++) {
        let generatedArr = A.map(v=>v.trim()[i]);
        if (isNonDecreasing(generatedArr)) result ++;
    }
    return strLen - result;
}

function isNonDecreasing(A) {
    for (let i=0; i<A.length-1; i++) {
        if (A[i] > A[i+1]) return false;
    }
    return true;
}
