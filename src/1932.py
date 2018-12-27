N=int(input())

dp = [[0] * N for i in range(N)]
for i in range(N):
    row = list(map(int, input().split()))
    for j, value in enumerate(row):
        dp[i][j] = value

for i in range(1, N):
    for j in range(i + 1):
        if j == 0:
            dp[i][j] += dp[i-1][j]
        elif j == N - 1:
            dp[i][j] += dp[i-1][j-1]
        else:
            dp[i][j] += max(dp[i-1][j-1], dp[i-1][j])

print(max(dp[N-1]))
