chess=[input() for i in range(8)]
cnt = 0
for i in range(8):
    for j, v in enumerate(chess[i]):
        if i % 2 == 0 and j % 2 == 0 and v == 'F':
            cnt += 1
        elif i % 2 == 1 and j % 2 == 1 and v == 'F':
            cnt +=1
print(cnt)