// powerOfTwo, leetcode
// https://leetcode.com/problems/power-of-two/

// my solution
var isPowerOfTwo = function(n) {
    currPowTwo = 0;
    i = 0;
    // if the current power of two is not n and it's still less than n, then basically keep looping and increasing the power of 2 by 1 each time until currPowTwo either meets n and true is returned or it goes over and false is returned
    while (currPowTwo != n && currPowTwo < n) {
        currPowTwo = Math.pow(2, i)
        if(n === currPowTwo){
            return true;
        }
        i++
    }
    return false
};

// someone else's solution that was even faster
var isPowerOfTwo = function(n) {
    let i = 1;
    while(i < n){
        i *= 2;
    }
    return i == n;
};