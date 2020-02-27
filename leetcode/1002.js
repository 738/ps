/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let word = A[0].split('');
    for (let i=1; i<A.length; i++) {
        let newWord = [];
        for (const char of A[i].split('')) {
            if (word.includes(char)) {
                newWord.push(char);
                word.splice(word.indexOf(char), 1);
            }
        }
        word = newWord;
    }
    return word;
};
