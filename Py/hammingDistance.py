# Hamming distance, leetcode
# https://leetcode.com/problems/hamming-distance/


class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        result = 0
        while x > 0 or y > 0:
            result += (x % 2) ^ (y % 2)
            x >>= 1
            y >>= 1
        return result
