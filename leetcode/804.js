/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morses = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let set = new Set();
    words.forEach(word => {
        set.add(word.split``.map(v => morses[alphabets.indexOf(v)]).join``);
    });
    return set.size;
};
