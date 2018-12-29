# 9095. 1,2,3 더하기
# 20181229

dp = [0]*12
dp[1] = 1
dp[2] = 2
dp[3] = 4

def D(n):
    if dp[n] != 0:
        return dp[n]
    else:
        dp[n] = D(n-1) + D(n-2) + D(n-3)
    return dp[n]

n = int(input())
for i in range(n):
    a = int(input())
    print(D(a))