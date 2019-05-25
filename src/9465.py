n=int(input())
for i in range(n):
    m = int(input())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))
    dp = [[a[0], b[0]], [max(a[0], b[0]+a[1]), max(b[0], a[0] + b[1])]]
    for j in range(2, m):
        dp.append([])
        dp[j].append(max(dp[j-1][1] + a[j], dp[j-2][1] + a[j], dp[j-1][0]))
        dp[j].append(max(dp[j-1][0] + b[j], dp[j-2][0] + b[j], dp[j-1][1]))
    print(max(dp[m-1][0], dp[m-1][1]))
