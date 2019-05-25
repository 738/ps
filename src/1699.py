# d=[i**2 for i in range(317)]
# def get_square_number(x):
#     for i in range(316, 0, -1):
#         if x >= d[i]:
#             return i**2

n=int(input())
dp = [0,1];
for i in range(2, n+1):
    p=0
    for j in range(1,int(i**(1/2))+1):
        if p > dp[i - j*j] + 1 or p == 0:
            p=dp[i - j*j] + 1
    dp.append(p)
print(dp[n])
