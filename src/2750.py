# 2750. 수 정렬하기

n = int(input())
arr = []
for i in range(n):
    arr.append(int(input()))

arr.sort(reverse=True)
for i in range(n):
    print(arr.pop())
