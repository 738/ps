/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    strs.sort((a, b) => a.length - b.length);
    const firstStr = strs[0];
    const minLength = firstStr.length;
    
    let result = 0;
    for (let i=0; i<minLength; i++) {
        let flag = true;
        for (let j=1; j<strs.length; j++) {
            if (strs[j][i] !== firstStr[i]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result ++;
        } else {
            break;
        }
    }
    return firstStr.substring(0, result);
};
