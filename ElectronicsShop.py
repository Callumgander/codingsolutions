## https://www.hackerrank.com/challenges/electronics-shop/problem?h_r=next-challenge&h_v=zen

def getMoneySpent(keyboards, drives, b):
    most = 0
    for i in range(len(keyboards)):
        for j in range(len(drives)):
            result = keyboards[i] + drives[j]
            if result > most and result <= b:
                most = result
    if most == 0:
        return -1
    return most