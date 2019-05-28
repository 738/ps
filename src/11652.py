from collections import Counter, defaultdict
d=defaultdict(int)
for i in range(int(input())):
    d[int(input())] += 1
a = list(Counter(d).most_common())
a.sort(key=lambda x: (-x[1], x[0]))
print(a[0][0])