/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = 0;
    let res = [-1];
    for (let i=arr.length-1; i>=1; i--) {
        if (max < arr[i]) max = arr[i];
        res.unshift(max);
    }
    return res;
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    return arr.map((_,i,a)=>{
        if (i === a.length - 1) return -1;
        return Math.max(...a.slice(i+1));
    });
};
