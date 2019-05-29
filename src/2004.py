import sys
sys.setrecursionlimit(2000)

def fact(x): return x*fact(x-1) if x > 1 else 1
def C(n,r): return fact(n)//(fact(r)*fact(n-r))
n,r=map(int,input().split())
a=str(C(n,r))
s=0
for v in a[::-1]:
    if v == "0":
        s+=1
    else:
        break
print(s)