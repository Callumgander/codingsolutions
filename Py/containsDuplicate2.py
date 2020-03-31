# contains duplicate ii, leetcode
# https://leetcode.com/problems/contains-duplicate-ii/submissions/

# relatively fast, not super memory efficient but oh well
# checks if the number at the current integer is in the map, if it is and the index - whatever the index of the last place that index was
# is less than k, then return true. Otherwise, assign the current value as the key in a dictionary and the value as the index of that value
# if true is not found then return false


class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        # use a dictionary (hashmap)
        hashmap = {}
        for i in range(len(nums)):
            current = nums[i]
            if current in hashmap and i - hashmap.get(current) <= k:
                return True
            else:
                hashmap[current] = i
        return False
