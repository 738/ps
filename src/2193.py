# 2193. 이친수
n=int(input())
dp = [[0,0],[0,1],[1,0]]

for i in range(3,91):
    dp.append([])
    dp[i].append(dp[i - 1][0] + dp[i - 1][1])
    dp[i].append(dp[i - 1][0])

print(dp[n][0] + dp[n][1])
