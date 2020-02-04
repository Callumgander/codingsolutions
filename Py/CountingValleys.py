## https://www.hackerrank.com/challenges/counting-valleys/problem

def countingValleys(n, s):
    cp = 0
    valleys = 0
    for i in range(n):
        if s[i] == 'U':
            cp += 1
        else:
            if(cp - 1 == -1):
                valleys += 1
            cp -= 1
    return valleys