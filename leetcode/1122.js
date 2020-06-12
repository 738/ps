/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const map = {};
    for (let i=0; i<arr2.length; i++) {
        map[arr2[i]] = i;
    }
    return arr1.sort((a,b) => {
        if (map[a] === undefined && map[b] === undefined) return a - b;
        return map[a] - map[b];
        
    });
};
