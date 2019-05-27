n,k = map(int, input().split())
d=[[1]*(k+1)]
for i in range(1, n+1):
    d.append([])
    d[i].append(0)
    d[i].append(1)
    d[i].append(i+1)
    for j in range(3, k + 1):
        s = 0
        for h in range(0, i+1):
            s += d[h][j-1]
        d[i].append(s % 1000000000)

print(d[n][k])
