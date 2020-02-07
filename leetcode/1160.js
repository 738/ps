/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const wordMaps = [];
  for (const word of words) {
    wordMaps.push(
      word.split('').reduce((t, v) => {
        if (!t[v]) t[v] = 1;
        else t[v]++;
        return t;
      }, {})
    );
  }
  const charsMap = chars.split('').reduce((t, v) => {
    if (!t[v]) t[v] = 1;
    else t[v]++;
    return t;
  }, {});
  let sum = 0;
  for (const wordMap of wordMaps) {
    let included = true;
    for (const key of Object.keys(wordMap)) {
      if (charsMap[key] === undefined || wordMap[key] > charsMap[key]) {
        included = false;
        break;
      }
    }
    if (included) sum += Object.keys(wordMap).reduce((t, v) => t + wordMap[v], 0);
  }
  return sum;
};
