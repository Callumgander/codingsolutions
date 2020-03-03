// fizzbuzz, leetcode

// not really much explanation needed, conditions for whether i is a multiple of 3, 5 or 3 and 5, making sure that the 3 and 5 conditional is first
// there's definitely a way to be more memory efficient about this and probably time efficient too
var fizzBuzz = function(n) {
    let result = [];
    for (let i = 1; i <= n; i++){
        if (i % 5 === 0 && i % 3 === 0){
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(`${i}`);
        }
    }
    return result;
};