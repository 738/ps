_, a, b = map(int, input().split())
cnt = 0
while a != b:
    a = a // 2 + a % 2
    b = b // 2 + b % 2
    cnt += 1
print(cnt)