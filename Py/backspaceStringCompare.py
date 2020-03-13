# backspaceStringCompare, leetcode
# https://leetcode.com/problems/backspace-string-compare/submissions/

# pretty damn efficient, got like 98% for speed and 100% for space


class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        # use stack, last in, first out. if char isn't # then push it to the appropriate stack
        # then if a hash appears, it will pop the last character entered, creating a two lists
        # without # or the characters preceding them
        sStack = []
        tStack = []
        for char in S:
            if char != '#':
                sStack.append(char)
            elif len(sStack) != 0:
                sStack.pop()
        for char in T:
            if char != '#':
                tStack.append(char)
            elif len(tStack) != 0:
                tStack.pop()
        return True if tStack == sStack else False
