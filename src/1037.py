a=int(input())
li=list(map(int,input().split()))

li.sort()

if a % 2 == 1:
    print(li[a//2] ** 2)
else:
    print(li[0] * li[-1])