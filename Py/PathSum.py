# Path Sum, Leetcode
# https://leetcode.com/problems/path-sum/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# slow, memory intensive, but it works, I always have problems with recursion and BSTs
# You call hasPathSum on the initial root node, if it doesn't exist then just return false, otherwise recursively call the function on the root's children, subtracting root's .val from the sum and passing it down
# each call should reduce the sum and move down the tree. Once the base case is hit, if a node is a leaf (has no children) if the sum is also 0, then return true, else if a path can't be found, the first conditional will return false


class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        if root == None:
            return False
        elif root.left == None and root.right == None and sum - root.val == 0:
            return True
        else:
            return Solution.hasPathSum(self, root.left, sum - root.val) or Solution.hasPathSum(self, root.right, sum - root.val)
