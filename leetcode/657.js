/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const a = moves.split('')
         .filter(v => /U|D/.test(v))
         .reduce((t, v) => {
            if (v === 'U') return t + 1;
            else return t - 1;
          }, 0);
    const b = moves.split('')
         .filter(v => /R|L/.test(v))
         .reduce((t, v) => {
            if (v === 'R') return t + 1;
            else return t - 1;
          }, 0);
    return a === 0 && b === 0;
};
