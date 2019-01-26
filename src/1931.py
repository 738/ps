from functools import cmp_to_key

n=int(input())
m=[list(map(int, input().split())) for i in range(n)]
def cmp(x, y):
    if x[1] == y[1]:
        return x[0] - y[0]
    else:
        return x[1] - y[1]
m.sort(key=cmp_to_key(cmp))

mn = 0
cnt = 0
for i in range(n):
    if m[i][0] >= mn:
        cnt+=1
        mn=m[i][1]

print(cnt)