import sys
input=sys.stdin.readline
n=int(input())
m=[0]*10001
for _ in range(n):
    p=int(input())
    m[p]+=1
for i in range(10001):
    while m[i]:
        m[i]-=1
        print(i)