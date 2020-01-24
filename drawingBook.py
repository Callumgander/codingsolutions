# https://www.hackerrank.com/challenges/drawing-book/problem

# definitely a wildly inefficient and complex solution but it did the job
def pageCount(n, p):
    if n - 1 == p and p != 1:
       if n % 2 == 0:
           return 1
    fromFirst = p
    fromLast = n - p
    x = 0
    if fromFirst < fromLast:
        x = fromFirst
    else:
        x = fromLast
    turns = int(x / 2)
    return turns