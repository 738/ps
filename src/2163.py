# 2163. 초콜릿 자르기

# N, M = map(int, input().split())
#
# dp = [[0], [0, 0], [0, 1, 3]]
#
# for i in range(3, 301):
#     dp.append([])
#     dp[i].append(0)
#     dp[i].append(i-1)
#     for j in range(2, i + 1):
#         dp[i].append(dp[i][j - 1] + i)
#
# print(dp[N][M] if N >= M else dp[M][N])

N, M = map(int, input().split())

dp = [0]

for i in range(1, 301):
    dp.append((N - 1) + (M - 1) * N)

print(dp[M])
