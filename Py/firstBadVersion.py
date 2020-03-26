# firstbadversion, leetcode
# https://leetcode.com/problems/first-bad-version/

# just decrementing -1 for n and checking leads to timeouts on larger testcases, so binary search works better


class Solution:
    def firstBadVersion(self, n):
        # use binary search, log n
        left = 1
        right = n
        while left < right:
            mid = left + (right - left) / 2
            print("Current mid: " + str(mid))
            if isBadVersion(mid) == False:
                left = mid + 1
                print("New Left: " + str(left))
            else:
                right = mid
                print("New Right: " + str(right))

        return int(left)
