# robot return to origin, leetcode
# https://leetcode.com/problems/robot-return-to-origin/

# My naive solution, really not efficient in terms of memory or speed, but it works
# essentially turn the moves into a list of moves then use conditionals to check the letter and adjust the position accordingly
# use a ternary operator to check whether the position is at the origin or not, if it is return true, else false


class Solution:
    def judgeCircle(self, moves: str) -> bool:
        # initial position
        position = [0, 0]
        # parsing movement string into a list
        movelist = [move for move in moves]
        # movement logic
        for i in range(len(movelist)):
            if movelist[i] == 'R':
                position[0] += 1
            elif movelist[i] == 'L':
                position[0] -= 1
            elif movelist[i] == 'U':
                position[1] += 1
            elif movelist[i] == 'D':
                position[1] -= 1
        return True if position == [0, 0] else False


# a better solution, faster but still not memory efficient
# rather than converting the string into an array, you can just loop through the string and rather than simulating the effect
# each move will have you can basically just check whether each corresponding right matches to a corresponding left  and the same for up and down, if they both still equal zero
# the robot hasn't moved from its origin and you return true, else false
class Solution:
    def judgeCircle(self, moves: str) -> bool:
        updown = 0
        leftright = 0
        for c in moves:
            if c == 'R':
                leftright += 1
            elif c == 'L':
                leftright -= 1
            elif c == 'U':
                updown += 1
            elif c == 'D':
                updown -= 1
        return leftright == 0 and updown == 0
