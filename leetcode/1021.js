/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let stack = [];
    let indexArray = [];
    S.split``.forEach((v, i) => {
        stack.push({v,i});
        if (v === ")") {
            if (stack.length === 2) {
                indexArray.push(stack[0].i);
                indexArray.push(stack[1].i);
            }
            stack.pop();
            stack.pop();
        }
    });
    return S.split``.map((v, i) => {
        if (indexArray.indexOf(i) !== -1) {
            return "";
        }
        return v;
    }).join``;
};
