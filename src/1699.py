n=int(input())
dp=[0]*(n+1)
for i in range(1,n+1):
    for j in range(1,int(i**(1/2))+1):
        if dp[i]>dp[i-j*j]+1 or dp[i]==0:
            dp[i]=dp[i-j*j]+1
print(dp[n])
