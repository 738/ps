n = int(input())

arr = list(map(int, input().split()))

res = map(lambda x: x / max(arr) * 100, arr)
print(sum(res)/n)
