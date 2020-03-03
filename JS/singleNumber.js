// Single number, leetcode
// https://leetcode.com/problems/single-number

// my naive solution, not super fast, relatively memory efficient. I guess the sort would be O(n log n) because JS default sort is mergesort which is O(n log n) then
// I guess the O() for the loop is n^2 and the if statement will be n, so the big O is probably O(n^2)? not super efficient. Also doesn't meet the note that says it should have linear runtime complexity
var singleNumber = function(nums) {
    // sort the array which allows you to perform a simple O(n) check where if the number in front of nums[i] is the same then just add 2 to i, essentially taking it to the next number to be checked, repeat until you find nums[i] that is not equal to the number in front of it, i.e. there is only 1 copy of it. 
    nums.sort((a,b) => a - b)
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != nums[i+1]){
            return nums[i];
        } else {
            i++;
        }
    }
};

// a more time efficient solution using a hashset instead of sorting the array and then checking the value in front of i
var singleNumber = function(nums) {
    // use a hashset to save numbers, popping them off whenever they appear twice, which should
    // leave you with one value at the end
    let hashSet = {};
    for(let i = 0; i < nums.length; i++){
       if(hashSet[nums[i]] === true){
           delete hashSet[nums[i]];
        } else {
            hashSet[nums[i]]= true;
        }
    }
    return Object.keys(hashSet);
}