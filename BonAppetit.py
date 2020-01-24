# https://www.hackerrank.com/challenges/bon-appetit/problem

#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the bonAppetit function below.
def bonAppetit(bill, k, b):
    anna_actual = (sum(bill) - bill[k]) / 2
    if anna_actual == b:
        print("Bon Appetit")
    elif b > anna_actual:
        print(int((sum(bill) / 2) - anna_actual))

if __name__ == '__main__':
    nk = input().rstrip().split()

    n = int(nk[0])

    k = int(nk[1])

    bill = list(map(int, input().rstrip().split()))

    b = int(input().strip())

    bonAppetit(bill, k, b)
