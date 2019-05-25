n=int(input())
m=list(map(int, input().split()))
dp=[1]
for i in range(1,n):
    mi = 0
    for j in range(i):
        if m[i] < m[j] and dp[j] > mi:
            mi = dp[j]
    dp.append(mi + 1)

print(max(dp))
