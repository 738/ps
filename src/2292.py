# 2292. 벌집
# 20181229

n=int(input())

def beeHouse(n):
    return 3*(n**2) - 3*n + 1

i=1
x=beeHouse(i)
while n > x:
    i += 1
    x=beeHouse(i)
print(i)
