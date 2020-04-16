# leetcode, majority element
# https://leetcode.com/problems/majority-element/submissions/

# Pretty simple, just use a hashmap to gather all instances of each value then just check each value in the hashtable
# to check which is the majority element then return the key
# Pretty fast, not super memory efficient because of the hashtable


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        hashtable = {}
        for num in nums:
            if num in hashtable:
                hashtable[num] += 1
            else:
                hashtable[num] = 1
        for key, value in hashtable.items():
            if value > len(nums) / 2:
                return key


# Someone else's better way of doing the above using some python tricks
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        counts = collections.Counter(nums)
        return max(counts.keys(), key=counts.get)
