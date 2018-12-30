from collections import Counter
s=input()
c=Counter(s.upper())

res=[]
maximum = c.most_common(1)[0][1]
for item in c.most_common():
    if item[1] == maximum:
        res.append(item[0])

print(res[0] if len(res) == 1 else '?')
