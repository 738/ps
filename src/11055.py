n=int(input())
m=list(map(int, input().split()))
dp=[m[0]]
for i in range(1,n):
    mi = 0
    for j in range(i):
        if m[i] > m[j] and dp[j] > mi:
            mi = dp[j]
    dp.append(mi + m[i])

print(max(dp))
