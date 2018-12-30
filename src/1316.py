from collections import defaultdict
n = int(input())
res = 0

for i in range(n):
    visit = defaultdict(int)
    ss = input()
    latest = ''
    for s in ss:
        if visit[s] != 0 and latest != s:
            res += 1
            break
        visit[s] += 1
        latest = s

print(n-res)
