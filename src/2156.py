def h(n):
    return 0 if n < 0 else n

n=int(input())
A=[0] + [int(input()) for i in range(n)]

D=[0]
for i in range(1, n+1):
    a=D[h(i-2)] + A[i]
    b=D[h(i-3)] + A[i-1] + A[i]
    c=D[i-1]
    D.append(max(a,b,c))

print(D[n])
