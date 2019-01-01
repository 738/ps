# 2579. 계단 오르기
# 20190101

s = [int(input()) for i in range(int(input()))]
dp = []

for i in range(len(s)):
    dp.append([])
    if i == 0:
        dp[i].extend([s[0], s[0]])
    elif i== 1:
        dp[i].extend([s[1], s[0] + s[1]])
    else:
        dp[i].append(max(dp[i - 2][0], dp[i - 2][1]) + s[i])
        dp[i].append(dp[i - 1][0] + s[i])

print(max(dp[len(s)-1][0], dp[len(s)-1][1]))

# 숏코딩
s=[int(input())for i in range(int(input()))];dp=[[s[0],s[0]],[s[1],s[0]+s[1]]]
for i in range(2,len(s)):dp.append([]);dp[i].append(max(dp[i - 2][0], dp[i - 2][1]) + s[i]);dp[i].append(dp[i - 1][0] + s[i])
print(max(dp[len(s)-1][0],dp[len(s)-1][1]))
