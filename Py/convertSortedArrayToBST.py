# Convert Sorted Array to Binary Search Tree, leetcode
# https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/submissions/


# not super time efficient or memory efficient but it works
class Solution:

    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        def recursiveMakeBST(nums, left, right):
            if left > right:
                return None
            mid = int(left + (right - left) / 2)
            current = TreeNode(nums[mid])
            current.left = recursiveMakeBST(nums, left, mid - 1)
            current.right = recursiveMakeBST(nums, mid + 1, right)
            return current
        if nums == None or len(nums) == 0:
            return None

        return recursiveMakeBST(nums, 0, len(nums) - 1)
