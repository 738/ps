import math
N=input()
res=[]
for i in range(10):
    res.append(N.count(str(i)))

tmp = res[6]
res[6] = 0
res[9] += tmp
res[9] = math.ceil(res[9]/2)
print(max(res))