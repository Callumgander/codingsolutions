# Count Negative Numbers in a Sorted Matrix, leetcode
# https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/submissions/

# so essentially get the max length of m and n then take away 1 so the indices don't go out of range
# loop through each one in reverse from m and n, if current element is negative, increment count, else if
# the current element is greater than or equal to 0, break the second loop, i.e. there are no more negative numbers in that row
# then just return the result


class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        m = len(grid) - 1
        n = len(grid[0]) - 1
        count = 0
        for i in range(m, -1, -1):
            for j in range(n, -1, -1):
                if grid[i][j] < 0:
                    count += 1
                elif grid[i][j] >= 0:
                    break
        return count


# waaaaaay simpler, faster solution by someone else
xo


class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        return sum(i < 0 for j in grid for i in j)
