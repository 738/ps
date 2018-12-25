# def isPrime(num):
#     if (num < 2):
#         return False
#     for i in range(2, num):
#         if num % i == 0:
#             return False
#     return True
#
# def sol(num1, num2):
#     primeArray = []
#     for i in range(num1, num2 + 1):
#         if isPrime(i):
#             primeArray.append(i)
#     if len(primeArray) == 0:
#         return -1, -1
#     return sum(primeArray), min(primeArray)
#
# a, b = int(input()), int(input())
# res1, res2 = sol(a, b)
# print(res1)
# if res1 != -1:
#     print(res2)

from math import sqrt

def isPrime(num):
    if num < 2:
        return False
    for i in range(2, int(sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

a, b = map(int, input().split())
for i in range(a, b + 1):
    if isPrime(i):
        print(i)
