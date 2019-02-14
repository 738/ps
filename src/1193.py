n = int(input())
x = 1
s = 0
cal = lambda x: x*(x - 1) // 2 + 1
while True:
    if cal(x) > n:
        x -= 1
        s = n - cal(x)
        break
    x += 1
if x % 2 == 0:
    print(str(s + 1) + "/" + str(x - s))
else:
    print(str(x - s) + "/" + str(s + 1))