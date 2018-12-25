# import math
#
# def isPrimeNumber(num):
#     if num == 1 or num == 0: return False
#     if num == 2: return True
#     for i in range(2, math.ceil(math.sqrt(num)) + 1):
#         if num % i == 0:
#             return False
#     return True
#
# s = 0
# num = int(input())
# a = map(int, input().split())
# for item in a:
#     if isPrimeNumber(item):
#         s += 1
# print(s)

def isPrime(num):
    if num < 2: return False
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

input()
print(sum([isPrime(i) for i in list(map(int, input().split()))]))




# input();print(sum(10103 ** ~ -A % A < 2 <= A for A in map(int,input().split())))