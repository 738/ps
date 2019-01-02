n=int(input())
c=list(map(int, input().split()))

dp=[c[0]]

for i in range(1, n):
    dp.append(max([*[dp[j] + c[i-j-1] for j in range(i)], c[i]]))

print(dp[n-1])

# 숏코딩
# n=int(input());c=list(map(int,input().split()));dp=[]
# for i in range(0,n):dp.append(max([*[dp[j]+c[i-j-1]for j in range(i)],c[i]]))
# print(dp[n-1])