/*
Leetcode 227

Given a string s which represents an expression, evaluate this expression and return its value.

The integer division should truncate toward zero.

 */

var calculate = function(s) {
    s.trim();
    let num ="";
    let calc = [];
    let prevSign = '+';
    for(let i = 0; i<s.length; i++) {
        //build up this solution, so long as this is not a op its a number
        if(!isNaN(s[i])) {
            num+=s[i];
        }

        // If it is not a number OR we are at the last index
        // When we are at the last index we have to evaluate no matter what
        if(isNaN(s[i]) || i === s.length-1){
            if(prevSign === '+') {
                calc.push(Number(num));
            }else if(prevSign === '-') {
                calc.push(-num);
            }else if(prevSign === '*') {
                calc.push(Math.floor(calc.pop() * num));
            }else {
                calc.push(Math.trunc(calc.pop()/num));
            }
            num = '';
            prevSign = s[i];
        }
    }
    return calc.reduce((a,b) =>a+b);
};