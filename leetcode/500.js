/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    let result = [];
    for (const word of words) {
        let index = -1;
        for (let i=0; i<3; i++) {
            if (rows[i].includes(word[0].toLowerCase())) {
                index = i;
            }
        }
        let successFlag = true;
        for (const char of word) {
            if (!rows[index].includes(char.toLowerCase())) {
                successFlag = false;
                break;
            }
        }
        if (successFlag) result.push(word);
    }
    return result;
};
