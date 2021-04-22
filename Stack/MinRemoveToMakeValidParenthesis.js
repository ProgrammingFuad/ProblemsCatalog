/**
 * @param {string} s
 * @return {string}
 */
/*
1249. Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions )
so that the resulting parentheses string is valid and return any valid string.

 */
var minRemoveToMakeValid = function(s) {
    let badIndex =  new Set();
    let brackets = [];

    for(let i =0; i<s.length; i++) {

        if(s[i] === '(') {
            brackets.push(i);
        }else if(s[i] === ')'){
            if(brackets.length === 0) {
                badIndex.add(i);
            }else{
                brackets.pop();
            }
        }
    }

    while(brackets.length) {
        badIndex.add(brackets.pop());
    }

    let result = "";
    for(let i =0; i<s.length; i++) {
        if(badIndex.has(i)){
            continue;
        }
        result+=s[i];
    }


    return result;
};