from functools import reduce
from collections import Counter
arr = []
for i in range(3):
    arr.append(int(input()))
res = reduce(lambda x, y: x * y, arr)
resArr = list(str(res))
c = Counter(resArr)
for i in range(10):
    print(c[str(i)])