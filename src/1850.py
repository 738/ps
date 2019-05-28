def gcd(a, b):
    if a < b: a, b = b, a
    while a % b != 0:
        a, b = b, a%b
    return b

import sys
input = sys.stdin.readline
a, b = map(int, input().split())

print("1"*gcd(a,b))