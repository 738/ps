def gcd(m, n):
    if m < n: m, n = n, m
    while n != 0:
        t = m % n
        m, n = n, t
    return m

def gcm(m, n):
    return m * n // gcd(m, n)

n=int(input())
for i in range(n):
    a, b = list(map(int, input().split()))
    print(gcm(a, b))