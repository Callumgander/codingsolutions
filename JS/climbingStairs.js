// climbing stairs, leetcode
// https://leetcode.com/problems/climbing-stairs/submissions/

// runs at an okay speed and okay memory efficiency
var climbStairs = function(n) {
    // Dynamic Programming Question
    // so you basically work from the bottom up, figuring out the number of solutions for the first two, 0 and 1, and then adding them together to get the number of solutions for 2, and so on until you reach 
    let result = new Array(n+1);
    result[0] = 1;
    result[1] = 1;
    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n]
};