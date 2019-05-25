n=int(input())
m=list(map(int, input().split()))
dp1=[1]
for i in range(1,n):
    mi = 0
    for j in range(i):
        if m[i] > m[j] and dp1[j] > mi:
            mi = dp1[j]
    dp1.append(mi + 1)

dp2=[1]
m.reverse()
for i in range(1,n):
    mi = 0
    for j in range(i):
        if m[i] > m[j] and dp2[j] > mi:
            mi = dp2[j]
    dp2.append(mi + 1)
dp2.reverse()

dp3=[dp1[i] + dp2[i] for i in range(n)]
print(max(dp3)-1)
