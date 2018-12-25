# 2747 피보나치 수
# 20181225

from sys import stdin, stdout
input = stdin.readline
print = stdout.write

arr = [0, 1]

for i in range(2, 46):
    arr.append(arr[i - 1] + arr[i - 2])

n = int(input())
print(str(arr[n])+"\n")
