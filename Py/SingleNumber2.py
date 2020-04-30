# Single Number 2,  leetcode
# https://leetcode.com/problems/single-number-ii/submissions/

# relatively fast, not very memory efficient


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        hashtable = {}
        # use a hashtable to count up occurences of each element
        for num in nums:
            if num in hashtable:
                hashtable[num] += 1
            else:
                hashtable[num] = 1
        # loop through until you find the key with the value of 1 and return that key
        for key in hashtable:
            if hashtable[key] == 1:
                return key
