# https://www.hackerrank.com/challenges/arrays-ds/problem

def reverseArray(a):
    newArr = []
    for i in reversed(range(len(a))):
        #print(int(a[i]), end = ' ')
        newArr.append(a[i])
    return newArr