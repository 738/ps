/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array(n).fill().map((_, i) => {
        const a = i + 1;
        if (a % 15 === 0) return "FizzBuzz";
        if (a % 5 === 0) return "Buzz";
        if (a % 3 === 0) return "Fizz";
        return a + '';
    });
};
