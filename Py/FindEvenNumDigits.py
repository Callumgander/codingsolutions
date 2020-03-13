# find numbers with even number of digits, leetcode
# https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

# my solution, pretty slow but it does the job
# take each num in nums, turn it into a string then get the length of that string to get the length of the integer
# take that length of modulo it by 2 to see if it's even or not, if it is then it stays in the list, else it gets filtered out
# then just return the length of the filtered array to give you the total number of numbers with even digits


class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        nums = list(filter(lambda i: len(str(i)) % 2 == 0, nums))
        return len(nums)


# someone else's solution. Much faster than mine, uses a list comprehension
class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        return len([i for i in nums if len(str(i)) % 2 == 0])
