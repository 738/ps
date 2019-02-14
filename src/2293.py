# 메모리 초과 뜸
# n, k = map(int, input().split())
# coins = [0] + [int(input()) for i in range(n)]
# dp = [[1] + [0 for i in range(k)]]
#
# for i in range(1, n+1):
#     dp.append([])
#     for j in range(k+1):
#         if coins[i] > j:
#             dp[i].append(dp[i-1][j])
#         else:
#             a=dp[i-1][j]
#             b=dp[i][j-coins[i]]
#             dp[i].append(a+b)
#
# print(dp[n][k])

n, k = map(int, input().split())
coins = [int(input()) for i in range(n)]

dp = [1] + [0 for i in range(k)]
for i in range(n):
    for j in range(1, k+1):
        if j >= coins[i]:
            dp[j] += dp[j-coins[i]]

print(dp[k])