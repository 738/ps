n=int(input())
dp = [[0,1,1,1,1,1,1,1,1,1]]

for i in range(1, n):
    dp.append([])
    dp[i].append(dp[i - 1][1])
    dp[i].append(dp[i - 1][0] + dp[i-1][2])
    dp[i].append(dp[i - 1][1] + dp[i - 1][3])
    dp[i].append(dp[i - 1][2] + dp[i - 1][4])
    dp[i].append(dp[i - 1][3] + dp[i - 1][5])
    dp[i].append(dp[i - 1][4] + dp[i - 1][6])
    dp[i].append(dp[i - 1][5] + dp[i - 1][7])
    dp[i].append(dp[i - 1][6] + dp[i - 1][8])
    dp[i].append(dp[i - 1][7] + dp[i - 1][9])
    dp[i].append(dp[i - 1][8])

print(sum(dp[n-1]) % 1000000000)