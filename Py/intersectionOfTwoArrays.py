# Intersection of Two Arrays, leetcode
# https://leetcode.com/problems/intersection-of-two-arrays/submissions/

# relatively fast, not memory efficient
# this was super simple because I knew that python had built-in set operations
# the only problem is that you have to convert the lists to strings and reassign them which I'm guessing takes up extra memory,
# hence why it's inefficient in terms of memory


class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1 = set(nums1)
        nums2 = set(nums2)
        x = list(nums1.intersection(nums2))
        return x
