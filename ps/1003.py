# 1003. 피보나치 수열
# 20181225

from sys import stdin
input = stdin.readline

total = 41

arr = [[0, 0] for i in range(total)]

def fibonacci(num):
    if num == 0:
        arr[0][0] = 1
        arr[0][1] = 0
    elif num == 1:
        arr[1][0] = 0
        arr[1][1] = 1
    else:
        arr[num][0] = arr[num-1][0] + arr[num-2][0]
        arr[num][1] = arr[num-1][1] + arr[num-2][1]


for i in range(total):
    fibonacci(i)

n = int(input())

for i in range(n):
    a = int(input())
    print("{} {}".format(arr[a][0], arr[a][1]))


