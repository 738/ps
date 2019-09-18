/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    return A.sort((a, b) => {
        if (a % 2 && b % 2) return 0;
        else if (a % 2) return 1;
        else if (b % 2) return -1;
        else return 0;
    });
};
