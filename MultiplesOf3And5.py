# https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem

#!/bin/python3

import sys


t = int(input().strip())
for a0 in range(t):
    k = int(input().strip())
   
    def sum_factors_of_n_below_k(k, n):
        m = (k-1) // n
        return n * m * (m+1) // 2

    def solution_01(k):
        print(sum_factors_of_n_below_k(k, 3) + 
                sum_factors_of_n_below_k(k, 5) - 
                sum_factors_of_n_below_k(k, 15))
    solution_01(k)