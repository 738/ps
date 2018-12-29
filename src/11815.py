# 11815. 짝수? 홀수?
# 20191229

n=int(input())

nums = list(map(int, input().split()))

def isSquareNumber(n):
    return int(n ** 0.5) ** 2 == n

res = []
for num in nums:
    res.append("1" if isSquareNumber(num) else "0")

print(" ".join(res))

# 숏코딩
# input();print(" ".join(["1"if int(n**0.5)**2==n else"0"for n in map(int, input().split())]))
