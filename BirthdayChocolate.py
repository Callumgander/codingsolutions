## https://www.hackerrank.com/challenges/day-of-the-programmer/problem?h_r=next-challenge&h_v=zen

def birthday(s, d, m):
    count = 0
    for i in range(len(s)):
        sumOfSeg = 0
        if i + m > len(s):
            break
        else:
            for modifier in range(m):
                sumOfSeg += s[i+modifier]
        if sumOfSeg == d:
            count += 1
    return count