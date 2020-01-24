## https://www.hackerrank.com/challenges/between-two-sets/problem

def getTotalX(a, b):
    nmax, nmin, count = max(a), min(b), 0
    for i in range(1,int(nmin/nmax)+1):
        if(sum((i*nmax)%n for n in a) + sum(n%(i*nmax) for n in b)) == 0:
            count+=1
    return count