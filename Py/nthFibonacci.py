
# naive recursive

# time: O(2^n) | space: O(n)
# def getNthFib(n):
#     if n == 2:
#         return 1
#     elif n == 1:
#         return 0
#     else:
#         return getNthFib(n - 1) + getNthFib(n - 2)

# caching with a hashtable

# time: O(n) | space: O(n)
# def getNthFib(n, memoize={1: 0, 2: 1}):
#     if n in memoize:
#         return memoize[n]
#     else:
#         memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize)
#         return memoize[n]

# iterative solution

# time: O(n) | space: O(1)


def getNthFib(n):
    lastTwo = [0, 1]
    counter = 3
    while counter <= n:
        nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter += 1
    return lastTwo[1] if n > 1 else lastTwo[0]
