## https://www.hackerrank.com/challenges/day-of-the-programmer

## modified my on solution so it's basically the same as the other persons
## as my solution before worked perfectly but was inefficient
def dayOfProgrammer(year):
    if year == 1918:
        return '26.09.1918'
    elif ((year <= 1917) & (year%4 == 0)) or ((year%400 == 0) or ((year%4 ==0) & (year%100 != 0))):
        return '12.09.%s' %year
    else:
        return '13.09.%s' %year

## other solutions
def solve(year):
    if (year == 1918):
        return '26.09.1918'
    elif ((year <= 1917) & (year%4 == 0)) or ((year%400 == 0) or ((year%4 ==0) & (year%100 != 0))):
        return '12.09.%s' %year
    else:
        return '13.09.%s' %year