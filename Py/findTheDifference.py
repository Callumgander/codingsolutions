# Find the difference, leetcode
# https://leetcode.com/problems/find-the-difference/submissions/


# relatively fast, not memory efficient. basically put all the occurrences of each character in s into a hashmap,
# then each time that character occurs in t decrement it's hashmap value. If the character is in the hashmap and it's value is zero
# or it's not in the hashmap, that means it's the character in t but not in s so return it
class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        hashmap = {}
        for c in s:
            if c in hashmap:
                hashmap[c] += 1
            else:
                hashmap[c] = 1
        for c in t:
            if c in hashmap and hashmap[c] == 0 or c not in hashmap:
                return c
            else:
                hashmap[c] -= 1
