// majority element, leetcode
// https://leetcode.com/problems/majority-element/submissions/

// same as the python solution but in js, probably a better way of doing this as it's significantly
// less efficient than the python one
var majorityElement = function(nums) {
    hashmap = {};
    for (let i = 0; i < nums.length; i++){
        if (nums[i] in hashmap) {
            hashmap[nums[i]] += 1;
        } else {
            hashmap[nums[i]] = 1;
        }
    }
    for (let [key, value] of Object.entries(hashmap)){
        if (value > (nums.length / 2)) {
            return key
        }
    }
};