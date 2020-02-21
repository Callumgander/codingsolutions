// twoNumberSum, leetcode
// https://leetcode.com/problems/two-sum/submissions/

// my solution, not particularly fast, but has better memory usage than 99.59% of other submissions
// which is pretty insane. I guess it's around O(n^2) time and around O(1) space, maybe?
var twoSum = function(nums, target) {
    // loop through and take nums[i] away from target then 
    // see if nums includes the newTarget, if so get the indexOf
    // that element, unless indexOf === i, and return nums[i] and nums.indexOf(newTarget)
    for (let i = 0; i < nums.length; i++){
        let newTarget = target - nums[i];
        if (nums.indexOf(newTarget) != -1 && nums.indexOf(newTarget) != i){
            return [i, nums.indexOf(newTarget)];
        }
    }
};

