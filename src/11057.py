n=int(input())
dp=[[1]*10]
for i in range(1, n):
    dp.append([])
    for j in range(10):
        s = 0
        for k in range(j, 10):
            s += dp[i-1][k]
        dp[i].append(s)
print(sum(dp[n-1]) % 10007)