from math import gcd
n=int(input())
for i in range(n):
    a=list(map(int,input().split()))[1:]
    s=0
    for j in range(len(a)):
        for k in range(j+1,len(a)):
            s+=gcd(a[j],a[k])
    print(s)
