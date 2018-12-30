dp = [0, 0, 3]

for i in range(3, 31):
    if i % 2 == 1:
        dp.append(0)
    else:
        dp.append(3*dp[i-2] + sum([2*dp[j] for j in range(i-4, 0, -2)]) + 2)

print(dp[int(input())])

# 숏코딩
# d=[0,0,3]
# for i in range(3,31):d.append(3*d[i-2]+sum([2*d[j]for j in range(i-4,0,-2)])+2if i%2==0else 0)
# print(d[int(input())])
