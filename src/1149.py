n=int(input())

rgb = []
for i in range(n):
    R, G, B = map(int, input().split())
    rgb.append([])
    rgb[i].append(R)
    rgb[i].append(G)
    rgb[i].append(B)

dp=[rgb[0]]
for i in range(1, n):
    dp.append([])
    dp[i].append(min(dp[i - 1][1], dp[i - 1][2]) + rgb[i][0])
    dp[i].append(min(dp[i - 1][2], dp[i - 1][0]) + rgb[i][1])
    dp[i].append(min(dp[i - 1][0], dp[i - 1][1]) + rgb[i][2])

print(min(dp[n-1][0], dp[n-1][1], dp[n-1][2]))
