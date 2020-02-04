## https://www.hackerrank.com/challenges/day-of-the-programmer

## This is a modified version of my own solution so it's more or the same as theirs. I don't claim any credit for this solution,
## the solution I had before worked and passed all the tests but was wildly inefficient
def dayOfProgrammer(year):
    if year == 1918:
        return '26.09.1918'
    elif ((year <= 1917) & (year%4 == 0)) or ((year%400 == 0) or ((year%4 ==0) & (year%100 != 0))):
        return '12.09.%s' %year
    else:
        return '13.09.%s' %year
