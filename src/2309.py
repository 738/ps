s = list(map(int, [input() for i in range(9)]))
tmp = [i for i in s]
res = []
print(s)
for i in range(8):
    for j in range(i + 1, 9):
        print(s[i])
        tmp.remove(s[i])
        tmp.remove(s[j])
        if sum(tmp) == 100:
            res = tmp
            break
        tmp = [i for i in s]

print(res)