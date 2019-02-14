# def gcd(m, n):
#     if m < n: m, n = n, m
#     while n != 0:
#         m, n = n, m % n
#     return m
#
# def gcm(m, n):
#     return m * n // gcd(m, n)
#
# a, b = list(map(int, input().split()))
# print(gcd(a, b), gcm(a, b), sep='\n')

# code golf
a,b=map(int,input().split())
M=a*b
while b:a,b=b,a%b
print(a,M//a)