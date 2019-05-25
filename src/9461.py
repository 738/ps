n=int(input())
d=[0,1,1,1,2,2]
for i in range(6,101):
    d.append(d[i-1]+d[i-5])
for i in range(n):
    print(d[int(input())])