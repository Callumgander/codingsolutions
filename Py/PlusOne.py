# Plus One, leetcode
# https://leetcode.com/problems/plus-one

# memory efficient and relatively fast, definitely could do with refactoring but it took me ages to get my head around debugging all the weird cases here,
# definitely need to work more on problems with recursively solutions

# essentially, you keep check the last number, if it's a 9, make it a zero and recursively go through the arr with len(arr) - x, where x gets incremented with each call
# the base case is that if it's not 9 then increment it by 1 and return, if it's the first element and equal to 9, make it 1 and append a 0 to the end of the array and return the arr


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        x = 1

        def ifLastZero(arr, x):
            # Base case, if arr[len(arr) - x] doesn't = 9
            if arr[len(arr) - x] != 9:
                arr[len(arr) - x] += 1
                return arr

            if arr[len(arr) - x] == 9 and len(arr) - x == 0:
                arr[0] = 1
                arr.append(0)
                return arr

            if arr[len(arr) - x] == 9:
                arr[len(arr) - x] = 0
                x += 1
                ifLastZero(arr, x)
            return arr
        return ifLastZero(digits, x)

# HOWEVER, afterwards, I found this solution by someone else that made me feel like something of an idiot because it does it really easily with loops and with
# WAY less conditions and less areas for code to go wrong, way more elegant as well as being faster


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        for i in range(len(digits) - 1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            digits[i] = 0
        digits.append(0)
        digits[0] = 1
        return digits
