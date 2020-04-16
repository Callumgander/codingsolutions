# Missing numbers, leetcode
# https://leetcode.com/problems/missing-number/submissions/


# naive, bad time complexity, bad space
# put all the nums into a set, loop through the nums up until the length of the nums list,
# if any of those numbers if not in the dictionary, return it. Otherwise, return -1
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        # use a dict to keep track of numbers
        numdict = {}
        for i in nums:
            numdict[i] = i

        for i in range(0, len(nums)+1):
            if i not in numdict:
                return i
        return -1
