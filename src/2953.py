s=[list(map(int, input().split())) for i in range(5)]
m = 0
p = -1
for i in range(5):
    if sum(s[i]) > m:
        m = sum(s[i])
        p = i + 1

print(p , m)