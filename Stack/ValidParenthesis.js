/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for(let i =0; i<s.length; i++) {
        let curr = s[i];

        if(curr === '(') {
            stack.push(')');
        }else if(curr === '[') {
            stack.push(']');
        }else if(curr === '{') {
            stack.push('}');
        }else {
            let lastEl = stack.pop();
            if(lastEl !== curr) {
                return false;
            }
        }
    }

    return !stack.length;
};