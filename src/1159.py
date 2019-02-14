from collections import defaultdict
n=int(input())
players=[input() for i in range(n)]
d=defaultdict(int)
for i in range(n):
    d[players[i][0]] += 1
res = list(filter(lambda x: d[x] > 4, d.keys()))
if len(res) == 0:
    print("PREDAJA")
else:
    print(*sorted(res), sep='')