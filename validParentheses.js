var isValid = function(s) {
    //use a stack to store bracket types
    //loop through s
        //put each char in the stack if it is an opener
        //check if a closer matches the last char in a stack
    //if finish loop then return true
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(')');
        else if (s[i] === '{') stack.push('}');
        else if (s[i] === '[') stack.push(']');
        else if (s[i] !== stack[stack.length - 1]) return false;
        else stack.pop();
    }
    if (stack.length) return false;
    return true;
};