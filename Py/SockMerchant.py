# https://www.hackerrank.com/challenges/sock-merchant/problem

def sockMerchant(n, ar):
    totalprs = 0
    freq = {}
    for i in ar:
        if i in freq:
            freq[i] += 1
        else:
            freq[i] = 1
    print(freq)
    for value in freq.values():
        if value % 2 == 1:
            totalprs += (value - 1) / 2
        elif value % 2 == 0:
            totalprs += value / 2
    
    return int(totalprs)