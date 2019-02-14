n=int(input())
paths = list(map(int, input().split()))
res = []
for i, v in enumerate(paths):
    if paths[i-1] >= v or i == 0:
        res.append([])
    res[-1].append(v)
print(max(map(lambda x: x[-1] - x[0], res)))
