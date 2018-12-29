s=input()
res=[]
for a in "abcdefghijklmnopqrstuvwxyz":
    res.append(str(s.find(a)))
print(" ".join(res))
