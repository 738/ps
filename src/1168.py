import sys
input=sys.stdin.readline
[n,k]=map(int,input().split())
a=[i+1 for i in range(n)]
r=[]
s = 0
for i in range(n):
    s = (s + k - 1) % len(a)
    r.append(str(a.pop(s)))
print("<", ", ".join(r), ">", sep="")
