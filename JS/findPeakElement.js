// findpeakelement, leetcode
//https://leetcode.com/problems/find-peak-element/

// no idea why this is supposed to be a medium difficulty question, I guess it's more difficult in languages without a Math.max method
// the problem description states that it can be any number which counts as a peak, which makes the problem waaaay too easy because you don't need to find each individual peak, you just find the max, find the index of the max and return, done
var findPeakElement = function(nums) {
    let mac = Math.max(...nums)
    return nums.indexOf(mac)
};