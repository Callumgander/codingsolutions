// validparentheses, leetcode
// https://leetcode.com/problems/valid-parentheses/


var isValid = function(s) {
    // use a stack
    // push i from the front of the character array to the stack if it's an opening bracket, then, presuming the brackets have a matching closing bracket and are closed in the correct order, when the top of the stack is checked and the bracket matches the closing bracket at i, as well as the stack not being empty, then the opening bracket will be popped. If any of these conditions aren't met then return false, else return the result of stack.length === 0, which if everything has worked and the stack is empty will return true
    let arr = [...s.split("")]
    let stack = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === '('|| arr[i] === '['|| arr[i] === '{'){
            stack.push(arr[i])
        } else if (arr[i] === ')' && stack.length != 0 && stack[stack.length-1] === '('){
            stack.pop()
        } else if (arr[i] === ']' && stack.length != 0 && stack[stack.length-1] === '['){
            stack.pop()
        } else if (arr[i] === '}' && stack.length != 0 && stack[stack.length-1] === '{'){
            stack.pop()
        } else {
            return false;
        }
    }    
    return stack.length === 0;
};