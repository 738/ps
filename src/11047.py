# 시간 초과
# n, k = map(int, input().split())
# coins = [int(input())for i in range(n)]
# i = len(coins) - 1
# s = 0
# while k > 0:
#     if coins[i] <= k:
#         k -= coins[i]
#         s += 1
#     else:
#         i -= 1
# print(s)

n, k = map(int, input().split())
coins = [int(input())for i in range(n)]
s = 0
for i in range(n-1,-1,-1):
    s += k // coins[i]
    k %= coins[i]
print(s)


