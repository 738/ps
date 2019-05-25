n=int(input())
m=list(map(int, input().split()))
dp=[m[0]]
for i in range(1, n):
    dp.append(max(dp[i-1] + m[i], m[i]))
print(max(dp))
