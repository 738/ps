n=int(input())
m=[list(map(int, input().split())) for i in range(n)]
m.sort(key=lambda x: x[1])

mn = 0
cnt = 0
for i in range(n):
    if m[i][0] >= mn:
        cnt+=1
        mn=m[i][1]

print(cnt)