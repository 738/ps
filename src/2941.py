s=input()
cros=['c=','c-','dz=','d-','lj','nj','s=','z=']
res=len(s)
for cro in cros:
    res -= s.count(cro)
print(res)
