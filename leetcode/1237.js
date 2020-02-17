/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
    const r = [];
    let x = 1, y = 1000;
    while (x <= 1000 && y >= 1) {
        const cal = customfunction.f(x, y);
        if (cal < z) x++;
        else if (cal > z) y--;
        else r.push([x++, y--]);
    }
    return r;
};
