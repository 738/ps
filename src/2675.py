n=int(input())

for i in range(n):
    a=input().split()
    S, R = int(a[0]), a[1]
    P=[]
    for j in R:
        P.append(j*S)
    print("".join(P))
